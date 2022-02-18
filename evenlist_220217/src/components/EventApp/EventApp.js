import React from 'react'
import {getAllEvents} from '../../services/event.api'

class EventApp extends React.Component {

    state = {
        dataCol: ["Event Name", "Start Date", "End Date", "Actions"],
        events: []

    }
    componentDidMount(){
        getAllEvents().then(data=>{
            this.setState({events: data})
        })
    }

    render() {
       getAllEvents().then(data=>console.log(data))

        return(
        <section className='event-app'>
            <header className="event-app__header"></header>
            <table className='event-app__table'>
                <thead>
                    <tr>
                        {this.state.dataCol?.map((col, index) =>
                            <th key={`${col}_${index}`}>
                                {col}
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    
                        {this.state.events?.map((event, index)=>
                          <tr key={`${event}_${index}`}>
                            <td>{event.eventName}</td> 
                            <td>{event.startDate}</td> 
                            <td>{event.endDate}</td> 
                            <td><button>EDIT</button></td> 
                            <td><button>DELETE</button></td> 
                         </tr> 
                         )}
                    
                </tbody>
            </table>
        </section>)
    }
}

export default EventApp