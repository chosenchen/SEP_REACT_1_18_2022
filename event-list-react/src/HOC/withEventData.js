import React from "react";
import { API } from "../util/api";

export const withEventData = (Component) => {
  return class NewComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        eventList : [],
      }
    }

    addNewEvent = (event) => {
      return API.addEvent(event).then(() => {
        return API.getEvents().then((data) => {
          this.setState({ eventList : data });
        });
      });
    }

    editEvent = (event) => (
      API.editEvent(event).then(() =>
        API.getEvents().then((data) => {
          this.setState({ eventList : data });
        })
      )
    );

    deleteEvent = (eventId) => (
      API.deleteEvent(eventId).then(() => 
        API.getEvents().then((data) => {
          this.setState({ eventList : data });
        })
      )
    ) 

    componentDidMount(){
      API.getEvents().then((data) => {
        this.setState({ eventList : data });
      });
    }

    render(){
      const {children, ...restProps} = this.props;
      const {eventList} = this.state ;
      return (
        <Component {...restProps} 
        eventList={eventList} 
        addNewEvent={this.addNewEvent}
        editEvent={this.editEvent}
        deleteEvent={this.deleteEvent}/>
      )
    }
  };
}