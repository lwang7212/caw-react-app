import React, {Component} from 'react';
import {
    StyledNavigationButton,
    NavigationButtonContainer
} from 'Components/buttons';

import {
    StyledContainner,
    StyledSidebar,
    StyledTabsWrapper,
    StyledTopNav,
    StyledBottomNav,
    StyledDrawer,
    StyledMainTabWrap,
} from './styledSidebarNav';

const Closing = 'CLOSING';
const Closed = 'CLOSED';
const Open = 'OPEN';
const Opening = 'OPENING';

/**
 * 导航控件第一版
 */
class SidebarNav extends Component {

    state = {};

    constructor(props) {
        super(props)
        this._onTransitionEnd = this.onTransitionEnd.bind(this)
    }

    componentDidMount() {
        this.setState({
            transitionState: Closed
        })
    }

    onTransitionEnd() {
        if (this.transitionState === Closing) {
            this.setState({
                transitionState: Closed,
                drawerContent: null
            })
        }
        if (this.transitionState === Opening) {
            this.setState({
                transitionState: Open
            })
        }
    }

    componentWillReceiveProps(nextProps) {

        console.log(nextProps);
    }

    render() {
        // debugger;
        let {onNavClick, topNavItems, bottomNavItems = []} = this.props;
        /**
         * 构建左边导航组件
         * @param list
         * @param selected
         * @returns {*}
         */
        const buildNavList = (list, selected) => {
            return list.map(item => {
                let isOpen = item.name.toLowerCase() === selected && this.state.transitionState!=Closed;

                return (
                    <NavigationButtonContainer
                        title={item.title}
                        data-test-id={'drawer' + item.name}
                        key={item.name}
                        onClick={() => {
                            this.setState({
                                transitionState: this.state.transitionState==Closed?Open:Closed,
                                drawerContent: item.name.toLowerCase()
                            });
                            return onNavClick(item.name.toLowerCase());
                        }}
                        isOpen={isOpen}
                    >
                        <StyledNavigationButton name={item.name}>
                            {item.icon(isOpen)}
                        </StyledNavigationButton>
                    </NavigationButtonContainer>
                )
            })
        };
        /**
         * 显示侧边栏导航区域详细信息
         * @param openDrawer
         * @returns {*}
         */
        const getContentToShow = openDrawer => {
            if (openDrawer) {
                let filteredList = topNavItems.concat(bottomNavItems).filter(item => {
                    return item.name.toLowerCase() === openDrawer
                });

                //只有仅有一个是打开的
                let TabContent = filteredList[0].content;
                console.log(filteredList.length);
                return <TabContent/>
            }
            return null
        };
        /**
         * 顶部导航条
         * @type {*}
         */
        const topNavItemsList = buildNavList(topNavItems, this.state.drawerContent);
        /**
         * 底部导航条
         * @type {*}
         */
        const bottomNavItemsList = buildNavList(bottomNavItems, this.state.drawerContent);

        return (
            <StyledContainner>
                <StyledSidebar>
                    <StyledTabsWrapper>
                        <StyledTopNav>{topNavItemsList}</StyledTopNav>
                        <StyledBottomNav>{bottomNavItemsList}</StyledBottomNav>
                    </StyledTabsWrapper>
                    <StyledDrawer
                        open={
                            this.state.transitionState === Open ||
                            this.state.transitionState === Opening
                        }
                        ref={ref => {
                            if (ref) {
                                // Remove old listeners so we don't get multiple callbacks.
                                // This function is called more than once with same html element
                                ref.removeEventListener('transitionend', this._onTransitionEnd)
                                ref.addEventListener('transitionend', this._onTransitionEnd)
                            }
                        }}
                    >
                        {getContentToShow(this.state.drawerContent)}
                    </StyledDrawer>
                </StyledSidebar>
                <StyledMainTabWrap>StyledMainTabWrap</StyledMainTabWrap>
            </StyledContainner>
        );
    }
}

export default SidebarNav;