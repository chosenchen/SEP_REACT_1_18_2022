import React from 'react'
import '../EventApp/EventApp.css'
import withEventData from '../HOC/withEventData'

class ComingEvent extends React.Component {

  state = {
    dataCol: ["Event Name", "Start Date", "End Date", "", ''],
    
  }
  
 
  render() {
    let {events} = this.props 
  
    return (
      <section className='event-app'>
        <header className="event-app__header">
          Upcoming Events Total: 
          <div>
          {events?.filter((event) => {
             let startDate = Date.parse(event.startDate)
             const today = Date.now()
              return startDate > today
              }
            ).length}
          </div>
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

            {events?.map((event, index) => {
             let startDate = Date.parse(event.startDate)
             const today = Date.now()
             let res = []
              if (startDate > today) {
               
                res.push(event)
                
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


const UpComingEvents = withEventData(ComingEvent)
export default UpComingEvents