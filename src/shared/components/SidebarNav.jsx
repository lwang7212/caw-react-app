import React, {Component} from 'react';
import {
    StyledContainer,
    StyledSidebar,
    StyledTabsWrapper,
    StyledTopNav,
    StyledBottomNav,
    StyledDrawer,
    StyledMainTabWrap,
    NavigationButtonContainer,
    StyledNavigationButton
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
        console.log("componentDidMount");
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
        console.log("componentWillReceiveProps");
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
                            //todo 状态改变采用redux 方式
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
                if(filteredList.length>0)
                {
                    //只有仅有一个是打开的
                    let TabContent = filteredList[0].content;
                    return <TabContent/>
                }
                else
                {
                    //没有打开的导航区域
                    return null;
                }
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
            <StyledContainer>
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
                            //组件被挂载后，回调函数被立即执行，回调函数的参数为该组件的具体实例
                            //组件被卸载或者原有的ref属性本身发生变化时,回调也会被立即执行，此时回调函数参数为null，以确保内存不泄露
                            console.log("this is ref   is null");
                            if (ref) {
                                console.log("this is ref  funtion success call");
                                console.log(ref);
                                // Remove old listeners so we don't get multiple callbacks.
                                // This function is called more than once with same html element
                                //css 动画过结束>> transition的过渡回调函数
                                ref.removeEventListener('transitionend', this._onTransitionEnd)
                                ref.addEventListener('transitionend', this._onTransitionEnd)
                            }
                        }}
                    >
                        {getContentToShow(this.state.drawerContent)}
                    </StyledDrawer>
                </StyledSidebar>
                <StyledMainTabWrap>StyledMainTabWrap</StyledMainTabWrap>
            </StyledContainer>
        );
    }
}

export default SidebarNav;