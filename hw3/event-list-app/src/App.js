import React from 'react';

import './App.css';
import EventList from './EventList';
import {getEvents} from './server';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [1,2,3] };
    this.getEvent = this.getEvent.bind(this);   
  }

  getEvent() {
    console.log(getEvents());
    this.setState({list: getEvents()})
  }

  render() {
    let list = this.state.list;
    console.log(list);
    return (
      <section className="table-container">
        <div className="add-content">
          <button className="add-btn">ADD NEW</button>
        </div>
        <EventList events={list}></EventList>
      </section>
    )

  }
};
