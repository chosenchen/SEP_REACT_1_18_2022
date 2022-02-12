import React from 'react';

import './App.css';
import EventList from './EventList';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false
    };
    this.handleAddNew = this.handleAddNew.bind(this);
  }

  handleAddNew() {
    this.setState({isAdd: true})
  }
  render() {
    return (
      <section className="table-container">
        <div className="add-content">
          <button className="add-btn" onClick={this.handleAddNew}>ADD NEW</button>
        </div>
        <EventList isAdd={this.state.isAdd}></EventList>
      </section>
    )

  }
};
