import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('light');

function ThemedButton(props) {
    // ThemedButton 组件从 context 接收 theme
    return (
        <ThemeContext.Consumer>
            {theme => <Button>{theme}</Button>}
        </ThemeContext.Consumer>
    );
}

// 中间组件
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="afdasfdas">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);