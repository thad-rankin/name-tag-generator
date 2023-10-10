import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";

const renderNameTag = (name) => <NameTag name={name} key={name} />;

class App extends Component {

  state = { names: ["Thad", "Meghan", "Taylor", "Cameron", "Jenny", "Justine", "James"]}

  render(){
    const NameTagElements = this.state.names.map(renderNameTag);

    return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
    );    
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
