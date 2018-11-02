import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';

/const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: none;
color: white;
`

const TomatoButton = styled(Button)`
background: tomato;
`

 

 
ReactDOM.render(
    <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>,
    document.getElementById('root')
);
