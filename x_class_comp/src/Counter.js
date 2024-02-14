import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = (value) => {
    this.setState((prevState) => {
        return {count: prevState.count + value};
    })
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleClick(1)}>Increment</button>
        <button onClick={() => this.handleClick(-1)}>Decrement</button>
      </>
    );
  }
}
