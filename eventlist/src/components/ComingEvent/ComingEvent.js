import React from "react";
import "../EventApp/EventApp.css";
// import { getAllEvents } from "../../services/event.api";
// import { EventData } from "../../models/EventData";
import {WithEventData} from "../HOC/WithEventData"
class ComingEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // events: [],
      dataCol: ["Event Name", "Start Date", "End Date"],
    };
  }
  

  // fetchAllEvents = () => {
  //   getAllEvents().then((data) => {
  //     const events = data.map(({ eventName, startDate, endDate, id }) => {
  //       const newEvent = new EventData(eventName, startDate, endDate, id);
  //       return newEvent;
  //     });

  //     this.setState({
  //       events,
  //     });
  //   });
  // };

  // componentDidMount() {
  //   this.fetchAllEvents();
  // }
  

  render() {
    console.log(this.props)
    const {events} = this.props
    return (
      <section className="event-app">
        <table className="event-app__table">
          <thead>
            <tr>
              {this.state.dataCol?.map((col, index) => (
                <th key={`${col}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events?.map((event) => (
              <tr key={event.id}>
                <td>
                  <input type="text" disabled value={event.eventName} />
                </td>
                <td>
                  <input type="date" disabled value={event.startDate} />
                </td>
                <td>
                  <input type="date" disabled value={event.endDate} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default WithEventData(ComingEvent);
