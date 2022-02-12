import React from 'react';

import './App.css';
import EventList from './EventList';
import {getEvents} from "./Api";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventList: [] };
  }

  componentDidMount() {
    getEvents().then((res) => {
      this.setState({ eventList: res });
    });
    
  }

  render() {
    return (
      <section className="table-container">
        <div className="add-content">
          <button className="add-btn">ADD NEW</button>
        </div>
          
          {/* <tbody id="table-body">
            
          </tbody> */}
          <EventList events={this.state.eventList}></EventList>
        
      </section>
    )

  }
};
