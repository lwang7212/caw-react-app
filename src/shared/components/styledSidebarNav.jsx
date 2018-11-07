/**
 * 页面布局样式
 */
import React from 'react'
import styled from 'styled-components'

/**
 * 布局容器
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
export const StyledContainner = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    background: #d2d5da;
`;
/**
 * 左边侧边条
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
/*export const StyledSideBar = styled.div`
    flex: 0 0 auto;
    height: 100vh;
    flex-grow: 0;
    flex: 0 0 auto;
    background-color: #4c4957;
    display: flex;
    flex-direction: row;
    border-right: 1px solid black;
    color: #fff;
    `;*/
/**
 * 左边侧边条
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
export const StyledSidebar = styled.div`
  flex: 0 0 auto;
  background-color: #4c4957;
  display: flex;
  flex-direction: row;
  border-right: 1px solid black;
  color: #fff;
`;

/**
 * 侧边条第一级导航条
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
/*export const StyledTabsWrapper = styled.div`
 display: flex;
 flex-direction: column;
 width: 81px;
 `;*/
export const StyledTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTabList = styled.ul`
  margin: 0;
  padding: 0;
`
/**
 * 侧边栏顶部导航
 * @type {StyledComponentClass<any, Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, *> | *}
 */
export const StyledTopNav = styled(StyledTabList)`
  align-self: flex-start;
  & > li {
    border-bottom: 1px solid #5d6370;
  }
`;
/**
 * 侧边栏顶部导航
 * @type {StyledComponentClass<any, Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, *> | *}
 */
export const StyledBottomNav = styled(StyledTabList)`
  align-self: flex-end;
  margin-top: auto;
  & > li {
    border-top: 1px solid #5d6370;
  }
`;


/**
 * 侧边导航条弹出区域
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
export const StyledDrawer = styled.div`
  flex: 0 0 auto;
  background-color: #30333a;
  overflow-x: hidden;
  overflow-y: auto;
  width: ${props => (props.open ? '300px' : '0px')};
  transition: 0.2s ease-out;
  z-index: 1;
`;

/**
 * 主tab页区域
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
export const StyledMainTabWrap = styled.div`
  margin-left: 24px;
  margin-top:17px; ;
  margin-right: 24px;
  width: auto;
  height: 200px;
  background: #ffffff;
  flex-grow: 1;
  height: 50vh;
`;



/**
 * 侧边栏导航按钮
 */
export const StyledNavigationButton = styled.button`
  background: transparent;
  border: 0;
  width: 80px;
  line-height: 67px;
  padding-top: 3px;
  font-size: 28px;
  &:focus {
    outline: none;
  }
`;
/**
 * 侧边栏导航按钮容器
 * @type {React.DetailedReactHTMLElement<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> | *}
 */
export const NavigationButtonContainer = styled.div`
  min-height: 70px;
  height: 70px;
  background-color: ${props =>
    !props.isOpen ? 'transparent' : props.theme.drawerBackground};
  &:focus {
    outline: none;
  }
`;