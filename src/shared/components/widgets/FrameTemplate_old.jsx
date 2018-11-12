/**
 * 框架容器模板
 */
import React, {Component} from 'react'
import FrameTitlebar from 'Components/widgets/FrameTitlebar'
import Render from 'Components/Render'
import {
    StyledFrame,
    StyledFrameBody,
    StyledFrameContents,
    StyledFrameStatusbar,
    StyledFrameMainSection
} from './styled'

class FrameTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullscreen: false,
            collapse: false,
            pinned: false,
            lastHeight: 10
        }
    }

    /**
     * 切换全屏
     */
    toggleFullScreen() {
        this.setState(
            {fullscreen: !this.state.fullscreen},
            () =>
                this.props.onResize &&
                this.props.onResize(
                    this.state.fullscreen,
                    this.state.collapse,
                    this.frameContentElement.clientHeight
                )
        )
    }

    /**
     * 切换折叠
     */
    toggleCollapse() {
        this.setState(
            {collapse: !this.state.collapse},
            () => {
                return this.props.onResize &&
                    this.props.onResize(
                        this.state.fullscreen,
                        this.state.collapse,
                        this.state.lastHeight
                    );
            }
        )
    }

    /**
     * 切换pin状态
     */
    togglePin() {


        this.setState(
            {pinned: !this.state.pinned},
            () =>
                this.props.onResize &&
                this.props.onResize(
                    this.state.fullscreen,
                    this.state.collapse,
                    this.state.lastHeight
                )
        )
    }

    /**
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
        if (this.frameContentElement.clientHeight < 300) return // No need to report a transition
        if (
            this.frameContentElement &&
            this.state.lastHeight !== this.frameContentElement.clientHeight
        ) {
            this.props.onResize &&
            this.props.onResize(
                this.state.fullscreen,
                this.state.collapse,
                this.frameContentElement.clientHeight
            );
            this.setState({lastHeight: this.frameContentElement.clientHeight})
        }
    }

    /**
     * widgets 内容
     * @param el
     */
    setFrameContentElement = el => {
        this.frameContentElement = el
    };

    render() {
        return (
            <StyledFrame data-test-id='frame' fullscreen={this.state.fullscreen}>
                <FrameTitlebar
                    frame={this.props.header}
                    fullscreen={this.state.fullscreen}
                    fullscreenToggle={this.toggleFullScreen.bind(this)}
                    collapse={this.state.collapse}
                    collapseToggle={this.toggleCollapse.bind(this)}
                    pinned={this.state.pinned}
                    togglePin={this.togglePin.bind(this)}
                    numRecords={this.props.numRecords || 0}
                    getRecords={this.props.getRecords}
                    visElement={this.props.visElement}
                />
                <StyledFrameBody
                    fullscreen={this.state.fullscreen}
                    collapsed={this.state.collapse}
                >
                    {this.props.sidebar ? this.props.sidebar() : null}
                    <StyledFrameMainSection>
                        <StyledFrameContents
                            fullscreen={this.state.fullscreen}
                            ref={this.setFrameContentElement}
                            data-test-id='frameContents'
                        >
                            {this.props.contents}
                        </StyledFrameContents>
                        <Render if={this.props.statusbar}>
                            <StyledFrameStatusbar
                                fullscreen={this.state.fullscreen}
                                data-test-id='frameStatusbar'
                            >
                                {this.props.statusbar}
                            </StyledFrameStatusbar>
                        </Render>
                    </StyledFrameMainSection>
                </StyledFrameBody>
            </StyledFrame>
        )
    }
}

export default FrameTemplate
