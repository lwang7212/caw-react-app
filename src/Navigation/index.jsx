/**
 * 左侧布局导航
 * Sidebar 左右结构
 */
import ReactDOM from "react-dom";
import React from 'react';
import SidebarNav from 'Components/SidebarNav';
import BookSearch from 'icons/book-search.svg'

import {
    DocumentsIcon,
    CloudIcon,
    SettingsIcon
}
from 'Components/icons/Icons';
import styled from "styled-components";


const button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const props={
    onNavClick:(item)=>console.log(item),
    topNavItems:[
        {
            name:"Nav1",
            title:"导航1",
            isOpen:true,
            icon:(isOpen)=><DocumentsIcon/>,
            content:()=><button>导航1</button>,
        },
        {
            name:"Nav2",
            title:"导航2",
            isOpen:true,
            icon:(isOpen)=><DocumentsIcon/>,
            content:()=><button>导航2</button>,

        },
        {
            name:"Nav3",
            title:"导航3",
            isOpen:true,
            icon:(isOpen)=><CloudIcon/>,
            content:()=><button>导航3</button>,
        },
        {
            name:"Nav4",
            title:"导航2",
            isOpen:true,
            icon:(isOpen)=><SettingsIcon/>,
            content:()=><button>导航4</button>,
        },
    ],
    bottomNavItems:[
        {
            name:"Nav5",
            title:"导航1",
            isOpen:true,
            icon:(isOpen)=><DocumentsIcon/>,
            content:()=><button>导航5</button>,
        },
        {
            name:"Nav6",
            title:"导航2",
            isOpen:true,
            icon:(isOpen)=><DocumentsIcon/>,
            content:()=><button>导航6</button>,
        },

    ]
};

ReactDOM.render(
   <SidebarNav {...props}></SidebarNav>,
    document.getElementById('root')
);