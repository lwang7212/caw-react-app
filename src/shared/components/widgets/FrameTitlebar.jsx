import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withBus } from 'react-suber';
import {ExpandIcon,ContractIcon,RefreshIcon,CloseIcon,UpIcon,DownIcon,PinIcon,DownloadIcon} from 'Components/icons/Icons';
import {StyledFrameTitleBar,StyledFrameCommand,DottedLineHover,FrameTitlebarButtonSection,DropdownList,DropdownContent,DropdownButton,DropdownItem} from './styled'
import Render from "Components/Render";
import {FrameButton} from "Components/buttons";

class FrameTitlebar extends Component {
  hasData () {
    return this.props.numRecords > 0
  }

    /**
     * 导出csv
     * @param records
     */
  exportCSV (records) {

  }
    /**
     * 导出png
     * @param records
     */
  exportPNG () {

  }

    /**
     * 导出SVG
     */
  exportSVG () {

  }
  exportGrass (data) {

  }
  canExport = () => {

  };
  render () {
    let props = this.props;
    const { frame = {} } = props;
    const fullscreenIcon = props.fullscreen ? <ContractIcon /> : <ExpandIcon />;
    const expandCollapseIcon = props.collapse ? <DownIcon /> : <UpIcon />;
    /*const cmd = removeComments(widgets.cmd);*/
    return (
      <StyledFrameTitleBar>
        <StyledFrameCommand>
          <DottedLineHover  data-test-id='frameCommand'  onClick={() => props.onTitlebarClick(frame.cmd)}>
            cmd
          </DottedLineHover>
        </StyledFrameCommand>
        <FrameTitlebarButtonSection>
          <Render if={true}>
            <DropdownButton data-test-id='frame-export-dropdown'>
              <DownloadIcon />
              <DropdownList>
                <DropdownContent>
                  <Render if={true}>
                    <span>
                      <DropdownItem onClick={() => this.exportPNG()}>
                        Export PNG
                      </DropdownItem>
                      <DropdownItem onClick={() => this.exportSVG()}>
                        Export SVG
                      </DropdownItem>
                    </span>
                  </Render>
                  <Render if={true}>
                    <DropdownItem
                      onClick={() => this.exportCSV(props.getRecords())}
                    >
                      Export CSV
                    </DropdownItem>
                  </Render>
                  <Render if={true}>
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
              props.togglePinning(frame.id, frame.isPinned);
            }}
            pressed={props.pinned}
          >
            <PinIcon />
          </FrameButton>
          <Render
            if={true}
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
          <Render if={true}>
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
      if (requestId) dispatch(cancelRequest(requestId))
      dispatch(remove(id))
    },
    onReRunClick: (cmd, id, requestId) => {
      if (requestId) dispatch(cancelRequest(requestId))
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
