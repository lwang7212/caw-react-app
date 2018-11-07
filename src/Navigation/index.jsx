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

const props={
    topNavItems:[
        {
            name:"Nav1",
            title:"导航1",
            isOpen:true,
            icon:(isOpen)=><DocumentsIcon/>
        },
        {
            name:"Nav2",
            title:"导航2",
            isOpen:true,
            icon:(isOpen)=><DocumentsIcon/>
        },
        {
            name:"Nav3",
            title:"导航3",
            isOpen:true,
            icon:(isOpen)=><CloudIcon/>
        },
        {
            name:"Nav4",
            title:"导航2",
            isOpen:true,
            icon:(isOpen)=><SettingsIcon/>
        },
    ]
};

ReactDOM.render(
   <SidebarNav {...props}></SidebarNav>,
    document.getElementById('root')
);