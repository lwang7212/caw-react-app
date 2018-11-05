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
export const StyledSideBar = styled.div`
    flex: 0 0 auto;
    height: 100vh;
    flex-grow: 0;
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
export const StyledSideNav = styled.div`
 display: flex;
 flex-direction: column;
 width: 81px;
 `;

/**
 * 侧边导航条弹出区域
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], Extract<keyof DefaultTheme, string> extends never ? any : DefaultTheme, JSX.IntrinsicElements["div"]>}
 */
export const StyledSideNavPop = styled.div`
  flex: 0 0 auto;
  background-color: #30333a;
  overflow-x: hidden;
  overflow-y: auto;
  transition: 0.2s ease-out;
  width: ${props => (props.open ? '300px' : '0px')};
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