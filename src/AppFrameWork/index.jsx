import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from 'Components/AppMain';
import {DocumentsIcon, CloudIcon, SettingsIcon} from "Components/icons/Icons";
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
let Status= function () {
    debugger;
    return (<div>statusbar</div>);
};
props.statusbar=<Status />;
props.contents=<div>this is context</div>;
ReactDOM.render(
    <AppMain {...props}  />,
    document.getElementById('root')
);