import ReactDOM from "react-dom";
import React from "react";
import style from "../css/app.css"
import style2  from "../css/App2.css";

function tick() {
    const element = (
        <div>
            <h1>Hello, world Page One!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('app'));
}
setInterval(tick, 1000);