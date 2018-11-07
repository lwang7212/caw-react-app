import React, {Component} from 'react'
import {
    StyledContainner,
    StyledSideBar,
    StyledSideNav,
    StyledSideNavPop,
    StyledMainTabWrap,
    StyledNavigationButton,
    NavigationButtonContainer,
} from './styledSidebarNav';

/**
 * 导航控件第一版
 */
class SidebarNav extends Component {
    state = {};
    constructor (props) {
        super(props)
        //this._onTransitionEnd = this.onTransitionEnd.bind(this)
    }
    render() {
        debugger;
        let {onNavClick, topNavItems, bottomNavItems=[]} = this.props;
        /**
         * 构建左边导航组件
         * @param list
         * @param selected
         * @returns {*}
         */
        const buildNavList = (list, selected) => {
            return list.map(item => {
                const isOpen = item.name.toLowerCase() === selected;
                return (
                    <NavigationButtonContainer
                        title={item.title}
                        data-test-id={'drawer' + item.name}
                        key={item.name}
                        onClick={() => onNavClick(item.name.toLowerCase())}
                        isOpen={isOpen}
                    >
                        <StyledNavigationButton name={item.name}>
                            {item.icon(isOpen)}
                        </StyledNavigationButton>
                    </NavigationButtonContainer>
                )
            })
        };

        const topNavItemsList = buildNavList(topNavItems, this.state.drawerContent);
        const bottomNavItemsList = buildNavList(bottomNavItems,this.state.drawerContent);
        return (
            <StyledContainner>
                <StyledSideBar>
                    <StyledSideNav>{topNavItemsList}</StyledSideNav>
                    <StyledSideNavPop open={true}>StyledSideNavPop</StyledSideNavPop>
                </StyledSideBar>
                <StyledMainTabWrap>StyledMainTabWrap</StyledMainTabWrap>
            </StyledContainner>
        );
    }
}

export default SidebarNav;