import ReactDOM from "react-dom";
import React from "react";
import  style from "../css/style.css";

Object.assign(style.test,{"font-size":"14px"});

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            width: props.width||-1,
            height: props.height||-1,
        }
    }
    componentDidMount() {
        this.updateSize();
        window.addEventListener('resize', this.updateSize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize.bind(this));
    }
    updateSize() {
        try {
            debugger;
            const parentDom = ReactDOM.findDOMNode(this).parentNode;
            let { width, height } = this.props;
            if (!width) {
                width = parentDom.offsetWidth;
            }
            if (!height) {
                height = width * 0.38;
            }
            this.setState({ width, height });
        } catch (ignore) {}
    }

    render() {
        return (
            <div className="test" style={{width:this.state.width,height:this.state.height}} >
                {`${this.state.width} x ${this.state.height}`}
            </div>
        );
    }
}


ReactDOM.render(
    <Card/>,
    document.getElementById('root')
);
