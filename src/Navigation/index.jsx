
import React, { Component } from 'react'
import neo4j from 'icons/neo-world.svg'
import {IconContainer} from "./icons/IconContainer";

const DocumentsIcon = props => (
    <IconContainer
        icon={neo4j}
        width={28}
        {...props}
    />
);
ReactDOM.render(
    <DocumentsIcon text="this is icon" />,
    document.getElementById('root')
);


