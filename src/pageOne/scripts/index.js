import ReactDOM from "react-dom";
import React from "react";
import style from "../css/app.css"
import style2  from "../css/App2.css";

import Box from 'react-layout-components'

const Example = () => (
    <Box width={300} height={500}>
        //This acts as an actual flexbox container
        <Box justifyContent="center" alignItems="flex-start">
            <Box flex={3}>Flex 3</Box>
            <Box flex="1 0 auto" alignSelf="baseline">Flex 1</Box>
        </Box>
    </Box>
);
ReactDOM.render(Example, document.getElementById('app'));