import React from 'react';
import { myStore } from '../../MyRedux/MyRedux';

export default class Counter extends React.Component {
  state = {
    title: 'Counter Class ',
    counter: 0,
  };

  componentDidMount() {
    myStore.subscribe(() => {
      console.log('subscribe update');
      this.forceUpdate();
    });
  }

  handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
  };

  handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
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
        <p>Counter: {myStore.getState().value}</p>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
        <button onClick={this.handleAlert}>AlertCounter After 5s</button>
      </section>
    );
  }
}
