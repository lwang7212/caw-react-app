/**
 * 左侧布局导航
 * Sidebar 左右结构
 */
import ReactDOM from "react-dom";
import React from 'react';
import Sidebar from 'Components/Sidebar';
import FrameMain from 'Components/frame/FrameTemplate'
import {Provider} from 'react-redux';
import {createBus} from 'suber';
import {BusProvider} from 'react-suber';
import styled from 'styled-components';

const  store = createStore((state = [], action) => state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//todo test
import {
    DocumentsIcon,
    CloudIcon,
    SettingsIcon
}
    from 'Components/icons/Icons';
import productsReducer from "../AppFrameWork/reducers/products-reducer";
import cartReducer from "../AppFrameWork/reducers/cart-reducer";
import {createStore} from "redux";

// Create suber bus
const bus = createBus()
const props = {
    onNavClick: (item) => console.log(item),
    topNavItems: [
        {
            name: "Nav1",
            title: "导航1",
            isOpen: true,
            icon: (isOpen) => <DocumentsIcon/>,
            content: () => <button>导航1</button>,
        },
        {
            name: "Nav2",
            title: "导航2",
            isOpen: true,
            icon: (isOpen) => <DocumentsIcon/>,
            content: () => <button>导航2</button>,

        },
        {
            name: "Nav3",
            title: "导航3",
            isOpen: true,
            icon: (isOpen) => <CloudIcon/>,
            content: () => <button>导航3</button>,
        },
        {
            name: "Nav4",
            title: "导航2",
            isOpen: true,
            icon: (isOpen) => <SettingsIcon/>,
            content: () => <button>导航4</button>,
        },
    ],
    bottomNavItems: [
        {
            name: "Nav5",
            title: "导航1",
            isOpen: true,
            icon: (isOpen) => <DocumentsIcon/>,
            content: () => <button>导航5</button>,
        },
        {
            name: "Nav6",
            title: "导航2",
            isOpen: true,
            icon: (isOpen) => <DocumentsIcon/>,
            content: () => <button>导航6</button>,
        },

    ]
};
/*const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: ${props => props.theme.primaryFontFamily};
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
`;*/
export const StyledWrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    background: #d2d5da;
`;
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
ReactDOM.render(
    <Provider store={store}>
        <BusProvider bus={bus}>
            <StyledWrapper>
            <Sidebar {...props}></Sidebar>
                <StyledMainTabWrap>
            <FrameMain>FrameTemplate</FrameMain>
                </StyledMainTabWrap>
            </StyledWrapper>
        </BusProvider>
    </Provider>,
    document.getElementById('root')
);