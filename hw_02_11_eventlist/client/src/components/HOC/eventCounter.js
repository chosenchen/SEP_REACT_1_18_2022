import React, { Component } from 'react'
import withEventList from './withEventList';

class eventCounter extends Component {
  render() {
    return (
      <div>COUNTER: {this.props.items.length}</div>
    )
  }
}
const CounterEvent = withEventList(eventCounter)
export default CounterEvent;