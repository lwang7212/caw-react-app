import React, { Component } from 'react'
import {
    StyledContainner,
    StyledSideBar,
    StyledSideNav,
    StyledSideNavPop,
    StyledMainTabWrap
} from './styledSidebarNav';

/**
 * 导航控件第一版
 */
class SidebarNav extends Component {

    render ()
    {
        return (
            <StyledContainner>
                <StyledSideBar>
                <StyledSideNav>SideNav</StyledSideNav>
                <StyledSideNavPop open={true}>StyledSideNavPop</StyledSideNavPop>
                </StyledSideBar>
                <StyledMainTabWrap>StyledMainTabWrap</StyledMainTabWrap>
            </StyledContainner>
        );
    }
}
export default SidebarNav;