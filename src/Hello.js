import React from "react";
import * as d3 from "d3";

// from https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Hello component
export function Hello({ name }) {
  return <h1 style={{ color: getRandomColor() }}>{name}</h1>;
}

// HelloD3 commponent
export class HelloD3 extends React.Component {
  componentDidMount() {
    this.createText();
  }

  componentDidUpdate() {
    // when props or state changed
    this.createText();
  }

  createText = () => {
    const graph = this.graph;
    d3
      .select(graph)
      .append("text")
      .attr("x", 0)
      .attr("y", 50)
      .attr("fill", getRandomColor())
      .style("font-size", "2em")
      .style("font-weight", "bold")
      .text(this.props.name);
  };

  render() {
    return <svg width="100%" height="100%" ref={e => (this.graph = e)} />;
  }
}
