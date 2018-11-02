import ReactDOM from "react-dom";
import React from "react";
import  Uitls from  "Utilities/Uitls";
let aa = 1;
console.log(Uitls.isEmpty(aa));
debugger;
class NameForm extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.json.map((item) =>
                       <React.Fragment>
                        <a href={item.url}>{item.title} </a>
                            <br></br>
                       </React.Fragment>
                    )
                }
            </div>
        );
    }
}

fetch("assets/mainfest.json")
    .then(response => response.json()).then((repos) => {
    console.log(JSON.stringify(repos));
    console.log(repos.length);

    ReactDOM.render(
        <NameForm json={repos}/>,
        document.getElementById('root')
    );
});


