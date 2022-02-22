import React from 'react'
import {
  getAllEvents
} from '../../services/event.api'
import EventData from '../../models/EventData'
import '../EventApp/EventApp.css'


class ComingEvent extends React.Component {

  state = {
    dataCol: ["Event Name", "Start Date", "End Date", "", ''],
    events: [],
    isShowAddEventRow: false,

  }

  //Create a new function to fetch events
  fetchAllEvents = () => {
    getAllEvents().then(data => {
      // this.setState({events: data})
      const events = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id)
        //generate new event
        newEvent.isEditing = false
        newEvent.editEvent = new EventData(eventName, startDate, endDate, id)
        return newEvent
      })

      this.setState({
        events,
      })
    })

  }


  componentDidMount() {
    this.fetchAllEvents()

  }


  render() {
    return (
      <section className='event-app'>
        <header className="event-app__header">
          Upcoming Events
        </header>
        <table className='event-app__table'>
          <thead>
            <tr>
              {this.state.dataCol?.map((col, index) => (
                <th key={`${col}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>

            {this.state.events?.map((event, index) => {
              const startDate = Date.parse(event.startDate)
              const today = Date.now()
              if (startDate > today) {
                return (<tr key={`${event}_${index}`}>
                  <td><input type="text" disabled name="eventName" value={event.editEvent.eventName}
                  /></td>
                  <td><input type="date" disabled name="startDate"
                    value={event.editEvent.startDate}
                  /></td>
                  <td><input type="date" disabled name="endDate"
                    value={event.editEvent.endDate}
                  /></td>

                </tr>)
              }

            }

            )}

          </tbody>

        </table>
      </section>)
  }
}

export default ComingEvent