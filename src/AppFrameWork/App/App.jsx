/**
 * 主界面入口
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withBus } from 'react-suber'
import { ThemeProvider } from 'styled-components'
import * as themes from 'Components/styles/themes'


import {
  StyledWrapper,
  StyledApp,
  StyledBody,
  StyledMainWrapper
} from './styled'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import UserInteraction from '../UserInteraction'
import DocTitle from '../DocTitle'
import asTitleString from '../DocTitle/titleStringBuilder'
import Intercom from '../Intercom'
import Render from 'browser-components/Render'
import BrowserSyncInit from '../Sync/BrowserSyncInit'
import DesktopIntegration from 'browser-components/DesktopIntegration'
import {
  getActiveCredentials,
  getActiveGraph
} from 'browser-components/DesktopIntegration/helpers'
import { getMetadata, getUserAuthStatus } from 'shared/modules/sync/syncDuck'
import ErrorBoundary from 'browser-components/ErrorBoundary'
import { getExperimentalFeatures } from 'shared/modules/experimentalFeatures/experimentalFeaturesDuck'
import FeatureToggleProvider from '../FeatureToggle/FeatureToggleProvider'

export class App extends Component {
  componentDidMount () {


    document.addEventListener('keyup', this.focusEditorOnSlash)
    document.addEventListener('keyup', this.expandEditorOnEsc)
  }
  componentWillUnmount () {
    document.removeEventListener('keyup', this.focusEditorOnSlash)
    document.removeEventListener('keyup', this.expandEditorOnEsc)
  }

  focusEditorOnSlash = e => {
    if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) > -1) return
    if (e.key !== '/') return
    this.props.bus && this.props.bus.send(FOCUS)
  }
  expandEditorOnEsc = e => {
    if (e.keyCode !== 27) return
    this.props.bus && this.props.bus.send(EXPAND)
  }
  render () {
    const {
      drawer,
      cmdchar,
      handleNavClick,
      activeConnection,
      connectionState,
      theme,
      errorMessage,
      loadExternalScripts,
      loadSync,
      syncConsent,
      browserSyncMetadata,
      browserSyncConfig,
      browserSyncAuthStatus,
      experimentalFeatures
    } = this.props
    const themeData = themes[theme] || themes['normal']

    return (
      <ErrorBoundary>
        <ThemeProvider theme={themeData}>
          <FeatureToggleProvider features={experimentalFeatures}>
            <StyledWrapper>
              <DocTitle titleString={this.props.titleString} />
              <UserInteraction />
              <DesktopIntegration
                integrationPoint={this.props.desktopIntegrationPoint}
                onMount={this.props.setInitialConnectionData}
                onGraphActive={this.props.switchConnection}
                onGraphInactive={this.props.closeConnectionMaybe}
              />
              <Render if={loadExternalScripts}>
                <Intercom appID='lq70afwx' />
              </Render>
              <Render if={syncConsent && loadExternalScripts && loadSync}>
                <BrowserSyncInit
                  authStatus={browserSyncAuthStatus}
                  authData={browserSyncMetadata}
                  config={browserSyncConfig}
                />
              </Render>
              <StyledApp>
                <StyledBody>
                  <ErrorBoundary>
                    <Sidebar openDrawer={drawer} onNavClick={handleNavClick} />
                  </ErrorBoundary>
                  <StyledMainWrapper>
                    <Main
                      cmdchar={cmdchar}
                      activeConnection={activeConnection}
                      connectionState={connectionState}
                      errorMessage={errorMessage}
                      useBrowserSync={loadSync}
                    />
                  </StyledMainWrapper>
                </StyledBody>
              </StyledApp>
            </StyledWrapper>
          </FeatureToggleProvider>
        </ThemeProvider>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = state => {
  const connectionData = getActiveConnectionData(state)
  return {
    experimentalFeatures: getExperimentalFeatures(state),
    drawer: state.drawer,
    activeConnection: getActiveConnection(state),
    theme: getTheme(state),
    connectionState: getConnectionState(state),
    cmdchar: getCmdChar(state),
    errorMessage: getErrorMessage(state),
    loadExternalScripts:
      allowOutgoingConnections(state) !== false && isConnected(state),
    titleString: asTitleString(connectionData),
    defaultConnectionData: getConnectionData(state, CONNECTION_ID),
    syncConsent: state.syncConsent.consented,
    browserSyncMetadata: getMetadata(state),
    browserSyncConfig: getBrowserSyncConfig(state),
    browserSyncAuthStatus: getUserAuthStatus(state),
    loadSync: useBrowserSync(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleNavClick: id => {
      dispatch(toggle(id))
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const switchConnection = (event, newContext, oldContext) => {
    const creds = getActiveCredentials('bolt', newContext)
    if (!creds) return // No connection. Ignore and let browser show connection lost msgs.
    const httpsCreds = getActiveCredentials('https', newContext)
    const httpCreds = getActiveCredentials('http', newContext)
    const restApi =
      httpsCreds && httpsCreds.enabled
        ? `https://${httpsCreds.host}:${httpsCreds.port}`
        : `http://${httpCreds.host}:${httpCreds.port}`
    const connectionCreds = {
      // Use current connections creds until we get new from API
      ...stateProps.defaultConnectionData,
      ...creds,
      encrypted: creds.tlsLevel === 'REQUIRED',
      host: creds.url || `bolt://${creds.host}:${creds.port}`,
      restApi
    }
    ownProps.bus.send(SWITCH_CONNECTION, connectionCreds)
  }
  const setInitialConnectionData = (graph, credentials, context) => {
    const creds = getActiveCredentials('bolt', context)
    if (!creds) return // No connection. Ignore and let browser show connection lost msgs.
    const httpsCreds = getActiveCredentials('https', context)
    const httpCreds = getActiveCredentials('http', context)
    const restApi =
      httpsCreds && httpsCreds.enabled
        ? `https://${httpsCreds.host}:${httpsCreds.port}`
        : `http://${httpCreds.host}:${httpCreds.port}`
    const connectionCreds = {
      // Use current connections creds until we get new from API
      ...stateProps.defaultConnectionData,
      ...creds,
      encrypted: creds.tlsLevel === 'REQUIRED',
      host: creds.url || `bolt://${creds.host}:${creds.port}`,
      restApi
    }
    ownProps.bus.send(INJECTED_DISCOVERY, connectionCreds)
  }
  const closeConnectionMaybe = (event, newContext, oldContext) => {
    const activeGraph = getActiveGraph(newContext)
    if (activeGraph) return // We still got an active graph, do nothing
    ownProps.bus.send(SILENT_DISCONNECT, {})
  }
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    switchConnection,
    setInitialConnectionData,
    closeConnectionMaybe
  }
}

export default withBus(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(App)
)
