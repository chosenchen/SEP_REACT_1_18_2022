import React from 'react'
import {getAllEvents, 
       addNewEvent, 
       deleteEvent
    } from '../../services/event.api'
import EventData from '../../models/EventData'

class EventApp extends React.Component {

    state = {
        dataCol: ["Event Name", "Start Date", "End Date", "Actions"],
        events: [],
        isShowAddEventRow: false,
        newEvent: {
            eventName: '',
            startDate: '' +Date.now(), //Conver number to string
            endDate: '' +Date.now() //Conver number to string
            
        }
        
     
    }

    //Create a new function to fetch events
    fetchAllEvents=()=>{
        getAllEvents().then(data=>{
            // this.setState({events: data})
           const events = data.map(({eventName, startDate, endDate, id})=>{
            const newEvent =  new EventData(eventName, startDate, endDate, id)
            newEvent.isEditing = false
            newEvent.editEvent =  new EventData(eventName, startDate, endDate, id)
            return newEvent
        })

            this.setState({ 
                events,
             })
        })

    }
  
    handleAddEvent=()=>{
        this.setState({isShowAddEventRow: true}) 
    }

    handleSaveAddEvent=()=>{
        const {eventName, startDate, endDate} = this.state.newEvent
        const newEvent = new EventData(eventName, startDate, endDate)
        newEvent.parseTimeStamp()
        console.log('newEvent',newEvent)
        // const newEvent = {
        //     ...this.state.newEvent
        // }
        if(newEvent.isValidForSave()){
            
            addNewEvent(newEvent).then(data=>{
                console.log('Successful get the data', data)
                //After successfully get the data, trigger getAllEvents, use cllback function
                // this.setState({ events: [...this.state.events, data]}) // update data goes to the top | refresh the page will go to bottom
                // getAllEvents().then(data=>{
                //     this.setState({
                //         events: data
                //     })
                // }) 
                this.fetchAllEvents()
            }) 
            this.handleClose() //trigger handler close 
        }else{
            alert('inValid')
        }
    }

    handleEdit=(id)=>{
       
        this.setState({
            events: this.state.events.map(event=>{
                if(event.id ===id){
                    return {...event, isEditing: true}
                   
                }else{
                    return event
                }
            })
       
    })
   

}

    handleOnChange=(e)=>{
        console.log('' + Date.now())
        const key = e.target.name
        const value = e.target.value
        this.setState({newEvent:{...this.state.newEvent, 
            [key]:  value}})
    } 

    handleDelete = (id)=>{
        deleteEvent(id).then(data=>{
           this.fetchAllEvents(); //Update the data
        }).catch((error)=>{
            console.warn(error) // notify there's error comes up
        })
    }

    handleClose=()=>{
        this.setState({
            isShowAddEventRow: false,
            newEvent: {
                eventName: '',
                startDate: '' +Date.now(), //Conver number to string
                endDate: '' +Date.now() //Conver number to string   
            }
        })
    }


    componentDidMount(){
     
        this.fetchAllEvents()
       
    }

    handleOnChangeEdit = ({target:{name, value}}, id)=>{
        this.setState({
            events: this.state.events.map(event=>{
                if(event.id ===id){
                    return {...event, editEvent:{...event.editEvent, [name]: value}} // this is the amazing part | event.editEvent
                   
                }else{
                    return event
                }
            })
       
      })
    }

    handleCancel=(id)=>{
        this.setState({
            events: this.state.events.map(event=>{
                if(event.id ===id){
                    return {...event, isEditing: false}
                   
                }else{
                    return event
                }
            })
        })
    }
   
    render() {
        return(
        <section className='event-app'>
            <header className="event-app__header">
                <button onClick={this.handleAddEvent}>Add Event</button>
            </header>
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
                          event.isEditing ?
                            (<tr key={`${event}_${index}`}>
                            <td><input type="text" name="eventName" value={event.editEvent.eventName} onChange={(e)=>this.handleOnChangeEdit(e, event.id)}
                            /></td> 
                            <td><input type="date" name="startDate"
                               value={event.editEvent.startDate} onChange={(e)=>this.handleOnChangeEdit(e,event.id)}
                            /></td> 
                            <td><input type="date" name="endDate"
                               value={event.editEvent.endDate} onChange={(e)=>this.handleOnChangeEdit(e, event.id)}
                            /></td> 
                            <td><button>SAVE</button></td> 
                            <td><button onClick={()=>this.handleCancel(event.id)}>CANCEL</button></td> 
                         </tr> )
                          : 
                          (<tr key={`${event}_${index}`}>
                            <td><input type="text" disabled value={event.eventName} onChange={this.handleOnChange}
                            /></td> 
                            <td><input type="date" disabled
                               value={event.startDate} onChange={this.handleOnChange}
                            /></td> 
                            <td><input type="date" disabled
                               value={event.endDate} onChange={this.handleOnChange}
                            /></td> 
                            <td><button onClick={()=>this.handleEdit(event.id)}>EDIT</button></td> 
                            <td><button onClick={()=>this.handleDelete(event.id)}>DELETE</button></td> 
                         </tr>)
                         )}
                    
                </tbody>
                <tfoot>
                    {this.state.isShowAddEventRow ? 
                       <tr>
                        <td><input type="text" value={this.state.newEvent.eventName} name="eventName" onChange={this.handleOnChange}/></td> 
                        <td><input type="date" value= {this.state.newEvent.startDate} name="startDate" onChange={this.handleOnChange} /></td> 
                        <td><input type="date" value={this.state.newEvent.endDate} name="endDate" onChange={this.handleOnChange} /></td> 
                        <td><button onClick={this.handleSaveAddEvent}>SAVE</button></td> 
                        <td><button onClick={this.handleClose}>CLOSE</button></td> 
                     </tr> 
                    : null}
                         
                </tfoot>
            </table>
        </section>)
    }
}

export default EventApp