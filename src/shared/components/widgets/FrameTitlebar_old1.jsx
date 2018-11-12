

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withBus } from 'react-suber'
import { saveAs } from 'file-saver'
import * as editor from 'Modules/editor/editorDuck'
import * as commands from 'Modules/commands/commandsDuck'
import { cancel as cancelRequest } from 'Modules/requests/requestsDuck'
import { remove, pin, unpin } from 'Modules/stream/streamDuck'
import { removeComments } from 'Service/utils'
import { FrameButton } from 'Components/buttons'
import Render from 'Components/Render'

import {
  ExpandIcon,
  ContractIcon,
  RefreshIcon,
  CloseIcon,
  UpIcon,
  DownIcon,
  PinIcon,
  DownloadIcon
} from 'Components/icons/Icons'
import {
  StyledFrameTitleBar,
  StyledFrameCommand,
  DottedLineHover,
  FrameTitlebarButtonSection,
  DropdownList,
  DropdownContent,
  DropdownButton,
  DropdownItem
} from './styled'
import {
  downloadPNGFromSVG,
  downloadSVG
} from 'shared/services/exporting/imageUtils'
import {
  stringifyResultArray,
  transformResultRecordsToResultArray
} from 'browser/modules/Stream/CypherFrame/helpers'
import { csvFormat } from 'services/bolt/cypherTypesFormatting'

class FrameTitlebar extends Component {
  hasData () {
    return this.props.numRecords > 0
  }
  exportCSV (records) {
    const exportData = stringifyResultArray(
      csvFormat,
      transformResultRecordsToResultArray(records)
    );
    let data = exportData.slice();
    const csv = CSVSerializer(data.shift());
    csv.appendRows(data)
    var blob = new Blob([csv.output()], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, 'export.csv')
  }
  exportPNG () {
    const { svgElement, graphElement, type } = this.props.visElement
    downloadPNGFromSVG(svgElement, graphElement, type)
  }
  exportSVG () {
    const { svgElement, graphElement, type } = this.props.visElement
    downloadSVG(svgElement, graphElement, type)
  }
  exportGrass (data) {
    var blob = new Blob([data], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, 'style.grass')
  }
  canExport = () => {
    let props = this.props;
    const { frame = {} } = props;
    return (
      (frame.type === 'cypher' && (this.hasData() || props.visElement)) ||
      (frame.type === 'style' && this.hasData())
    )
  };
  render () {
    let props = this.props;
    const { frame = {} } = props;
    const fullscreenIcon = props.fullscreen ? <ContractIcon /> : <ExpandIcon />
    const expandCollapseIcon = props.collapse ? <DownIcon /> : <UpIcon />
    const cmd = removeComments(frame.cmd);
    return (
      <StyledFrameTitleBar>
        <StyledFrameCommand>
          <DottedLineHover
            data-test-id='frameCommand'
            onClick={() => props.onTitlebarClick(frame.cmd)}
          >
            {cmd}
          </DottedLineHover>
        </StyledFrameCommand>
        <FrameTitlebarButtonSection>
          <Render if={this.canExport()}>
            <DropdownButton data-test-id='frame-export-dropdown'>
              <DownloadIcon />
              <DropdownList>
                <DropdownContent>
                  <Render if={props.visElement}>
                    <span>
                      <DropdownItem onClick={() => this.exportPNG()}>
                        Export PNG
                      </DropdownItem>
                      <DropdownItem onClick={() => this.exportSVG()}>
                        Export SVG
                      </DropdownItem>
                    </span>
                  </Render>
                  <Render if={this.hasData() && frame.type === 'cypher'}>
                    <DropdownItem
                      onClick={() => this.exportCSV(props.getRecords())}
                    >
                      Export CSV
                    </DropdownItem>
                  </Render>
                  <Render if={this.hasData() && frame.type === 'style'}>
                    <DropdownItem
                      data-test-id='exportGrassButton'
                      onClick={() => this.exportGrass(props.getRecords())}
                    >
                      Export GraSS
                    </DropdownItem>
                  </Render>
                </DropdownContent>
              </DropdownList>
            </DropdownButton>
          </Render>
          <FrameButton
            title='Pin at top'
            onClick={() => {
              props.togglePin();
              props.togglePinning(frame.id, frame.isPinned)
            }}
            pressed={props.pinned}
          >
            <PinIcon />
          </FrameButton>
          <Render
            if={['cypher', 'play', 'play-remote', 'queries'].includes(
              frame.type
            )}
          >
            <FrameButton
              title={props.fullscreen ? 'Close fullscreen' : 'Fullscreen'}
              onClick={() => props.fullscreenToggle()}
            >
              {fullscreenIcon}
            </FrameButton>
          </Render>
          <FrameButton
            title={props.collapse ? 'Expand' : 'Collapse'}
            onClick={() => props.collapseToggle()}
          >
            {expandCollapseIcon}
          </FrameButton>
          <Render if={['cypher', 'style'].includes(frame.type)}>
            <FrameButton
              data-test-id='rerunFrameButton'
              title='Rerun'
              onClick={() =>
                props.onReRunClick(frame.cmd, frame.id, frame.requestId)
              }
            >
              <RefreshIcon />
            </FrameButton>
          </Render>
          <FrameButton
            title='Close'
            onClick={() => props.onCloseClick(frame.id, frame.requestId)}
          >
            <CloseIcon />
          </FrameButton>
        </FrameTitlebarButtonSection>
      </StyledFrameTitleBar>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTitlebarClick: cmd => {
      ownProps.bus.send(editor.SET_CONTENT, editor.setContent(cmd))
    },
    onCloseClick: (id, requestId) => {
      if (requestId) dispatch(cancelRequest(requestId));
      dispatch(remove(id))
    },
    onReRunClick: (cmd, id, requestId) => {
      if (requestId) dispatch(cancelRequest(requestId));
      dispatch(commands.executeCommand(cmd, id))
    },
    togglePinning: (id, isPinned) => {
      isPinned ? dispatch(unpin(id)) : dispatch(pin(id))
    }
  }
};

export default withBus(
  connect(
    null,
    mapDispatchToProps
  )(FrameTitlebar)
)
