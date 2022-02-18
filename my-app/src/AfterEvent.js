import React from 'react';
import './App.css';

class AfterEvents extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <section className="eventslist">
        <form>
          <AfterEvent_container />
          </form>
        </section>
      )
    }
  }


  class AfterEvent_container extends React.Component {
    constructor(props) {
      super(props);
      this.baseurl = 'http://localhost:4000';
      this.path = "events";
      this.state={eventslist:[]};
    }
    componentDidMount(){
      this.getEvents();
    }
    getEvents() {
        fetch([this.baseurl, this.path].join("/"))
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                eventslist: result
              });
            }
          )
    }  
    render() {
      let eventls = this.state.eventslist?.filter((event)=>{
        return +event.startDate > + (new Date().getTime());
      }).map((event)=> <AfterEventslist_item  key={event.id} data={event} />);
      return (
        <>
        <AfterEventslist_header />
        <ul id="eventslist__container">
          {eventls}
        </ul>
        </>
      )
    }
  }

class AfterEventslist_header extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <header className="flex-containter eventlist-header">
          <div>Event Name</div>
          <div>Start date</div>
          <div>End date</div>
        </header>
      )
    }
  }


class AfterEventslist_item extends React.Component{
    constructor(props) {
      super(props);
    }
    formatDate = (date) => {
      
      let M = parseInt(date.getMonth()) + 1;
      if (M < 10) {
          M = "0" + M;
      }
      let D = parseInt(date.getDate())+1;
      if (D < 10) {
          D = "0" + D;
      }
      return date.getFullYear() + "-" + M + "-" + D;
      
    }
    render(){
      return (
        <li className="flex-containter" id={this.props.data.id}>
              <input className="event-item event-input-box name-input" name="eventName" readOnly disabled value={this.props.data.eventName} />
              <input className="event-item event-input-box startDate-input" type="date" readOnly name="startDate" disabled value={this.formatDate(new Date(+this.props.data.startDate))} />
              <input className="event-item event-input-box endDate-input" type="date" readOnly name="endDate"  disabled value={this.formatDate(new Date(+this.props.data.endDate))} />
        </li>
      )
    }
}

export default AfterEvents;