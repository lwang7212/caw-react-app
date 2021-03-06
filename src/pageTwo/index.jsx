import ReactDOM from "react-dom";
import React from "react";


render(
    <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
    </div>
);
function tick() {
    const element = (
        <div>
            <h1>Hello, world Page two!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);