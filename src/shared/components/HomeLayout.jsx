import React from 'react';

/**
 * 页面布局组件
 */
export default class  extends React.Component {
    render() {
        const {title, children} = this.props;
        let headerSytle = {
            padding: 10,
            margin: 10,
            backgroundColor: "#ffde00",
            color: "#333",
            textAlign: "center",
            width:"800px",
            height:"50px"
        };

        let mainSytle = {
            padding: 10,
            margin: 10,
            backgroundColor: "#ffde00",
            color: "#333",
            width:"800px",
            minHeight:"400px"
        };
        return (
            <div>
                <header style={headerSytle}>
                    <h1>{title}</h1>
                </header>
                <main style={mainSytle}>
                    {children}
                </main>
            </div>
        );

    }

}