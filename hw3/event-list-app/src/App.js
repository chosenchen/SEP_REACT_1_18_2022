import React from 'react';

import './App.css';
import EventList from './EventList';



export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isAdd: false
  //   };
  //   this.handleAddNew = this.handleAddNew.bind(this);
  // }

  // handleAddNew() {
  //   this.setState({ isAdd: true })
  // }
  render() {
    return (
      <EventList></EventList>
    )

  }
};
