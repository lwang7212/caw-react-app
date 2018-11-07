import ReactDOM from "react-dom";
import React from "react";
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        //debugger;
        // 创建 ref 存储 textInput DOM 元素
        //this.textInput = React.createRef();
       // this.focusTextInput = this.focusTextInput.bind(this);
        this.textInput = null;

        this.setTextInputRef = element => {
            debugger;
            this.textInput = element;
        };

        this.focusTextInput = () => {
            debugger;
            // 直接使用原生 API 使 text 输入框获得焦点
            if (this.textInput) this.textInput.focus();
        };
    }

   /* focusTextInput() {
        debugger;
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
    }*/

    render() {
        // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            debugger;
            this.textInput = element;
        };
    }

    componentDidMount() {
        debugger;
        this.textInput.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.setTextInputRef} />
        );
    }
}
ReactDOM.render(
    <AutoFocusTextInput></AutoFocusTextInput>,
    document.getElementById('root')
);