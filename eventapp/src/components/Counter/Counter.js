import React from 'react';
import { myConnect } from '../../MyReactRedux/MyReactRedux';

class Counter extends React.Component {
  state = {
    title: 'Counter Class ',
    counter: 0,
  };

  handleClick = () => {
    console.log('hello');
    this.props.add();
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
        <p>Counter: {this.props.CounterValue}</p>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleAlert}>AlertCounter After 5s</button>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CounterValue: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: 'counter/incremented' }),
  };
};
// currying function
export default myConnect(mapStateToProps, mapDispatchToProps)(Counter);
