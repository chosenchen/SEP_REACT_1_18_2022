import React from "react";

class Counter extends React.Component {
  state = {
    title: "Counter Class",
    counter: 0,
  };

  handleOnClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleAlert = () => {
    setTimeout(() => {
      alert(this.state.counter);
    }, 5000);
  };

  render() {
    return (
      <section>
        <header>{this.state.title}</header>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleOnClick}>Add</button>
        <button onClick={this.handleAlert}>Alert</button>
      </section>
    );
  }
}

export default Counter;