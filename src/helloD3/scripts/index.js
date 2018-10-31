import ReactDOM from "react-dom";
import React from 'react';
import * as d3 from 'd3';
import style from "../css/myStyle.css";
import {scaleOrdinal} from 'd3-scale';
//import {arc as d3Arc, pie as d3Pie} from 'd3-shape';
// 在id为‘theChart’的标签内创建svg

//.call(zoom); // 缩放
/*debugger;
const g = svg.append('g'); // 则svg中创建g*/
const arcGenerator = d3.arc();
const pathdata =arcGenerator({
        innerRadius: 50,
        outerRadius: 100,
        startAngle: 0,
        endAngle: Math.PI / 2
});

class Dvc extends React.Component {
    render() {
        return (
            <div id="theChart"></div>
        )
    }

    componentDidMount() {
       d3.select('#theChart').append('svg')
            .style('width', 500)
            .style('height', 500 * 0.9)
            .on('click', () => {
                console.log('click', d3.event.target.tagName);
            })
            .append("g")
            .attr("transform","translate(300, 110)")
            .append('path')
            .attr('d', pathdata);
    }

    componentWillUnmount() {
        this.$el.chosen('destroy');
    }
}

ReactDOM.render(
    <Dvc name="wanglei"/>,
    document.getElementById('root')
);
ReactDOM.render(
    <Dvc name="wanglei"/>,
    document.getElementById('root')
);