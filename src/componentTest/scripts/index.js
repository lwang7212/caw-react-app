import ReactDOM from "react-dom";
import React from "react";
/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}*/
class Welcome extends React.Component {
    render() {
        return <h1>Hello,sadfdsa  ddd{this.props.name}</h1>;
    }
}
ReactDOM.render(
    <Welcome name="wanglei d3 js" />,
    document.getElementById('root')
);