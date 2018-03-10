import React from "react";
import { render } from "react-dom";
import { Hello, HelloD3 } from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  itemsAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Hello" style={{ flex: "1 1 auto" }} />
    <div>
      <HelloD3 name="HelloD3" />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
