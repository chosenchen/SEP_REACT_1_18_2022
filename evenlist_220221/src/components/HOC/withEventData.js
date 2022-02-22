import React from "react"
import {
    getAllEvents,
    addNewEvent,
    deleteEvent,
    editEvent
} from '../../services/event.api'
import EventData from '../../models/EventData'

const withEventData=(Component)=>{
  return class NewComponent extends React.Component{
     constructor(props){
        super(props)
        this.state={
            dataCol: ["Event Name", "Start Date", "End Date", "Actions", ''],
            events:[],
            isShowAddEventRow: false,
            newEvent: {
                eventName: '',
                startDate: '' + Date.now(), //Conver number to string
                endDate: '' + Date.now() //Conver number to string
    
            },
            counter: 0
        }
     } 

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
  
     
     componentDidMount(){
        this.fetchAllEvents()
     }
     

    //All function 

    handleAddEvent = () => {
        this.setState({ isShowAddEventRow: true })
    }

    handleSaveAddEvent = () => {
        const { eventName, startDate, endDate } = this.state.newEvent
        const newEvent = new EventData(eventName, startDate, endDate)
        newEvent.parseTimeStamp()
        console.log('newEvent', newEvent)
        // const newEvent = {
        //     ...this.state.newEvent
        // }
        if (newEvent.isValidForSave()) {

            addNewEvent(newEvent).then(data => {
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
        } else {
            alert('inValid')
        }
    }

    handleEdit = (id) => {

        this.setState({
            events: this.state.events.map(event => {
                if (event.id === id) {
                    return { ...event, isEditing: true }

                } else {
                    return event
                }
            })
        })
    }

    handleOnChange = (e) => {
        console.log('' + Date.now())
        const key = e.target.name
        const value = e.target.value
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                [key]: value
            }
        })
    }

    handleDelete = (id) => {
        deleteEvent(id).then(data => {
            this.fetchAllEvents(); //Update the data
        }).catch((error) => {
            console.warn(error) // notify there's error comes up
        })
    }

    handleClose = () => {
        this.setState({
            isShowAddEventRow: false,
            newEvent: {
                eventName: '',
                startDate: '' + Date.now(), //Conver number to string
                endDate: '' + Date.now() //Conver number to string   
            }
        })
    }


   
    handleOnChangeEdit = ({ target: { name, value } }, id) => {
        this.setState({
            events: this.state.events.map(event => {
                if (event.id === id) {
                    return {
                        ...event,
                        editEvent: { ...event.editEvent, [name]: value }
                    } // this is the amazing part | event.editEvent

                } else {
                    return event
                }
            })

        })
    }

    handleEditSave = (editEventObj) => {
        editEvent(editEventObj).then(data => {

            this.setState({
                events: this.state.events.map(event => {
                    if (event.id === editEventObj.id) {
                        return {
                            ...editEventObj,
                            isEditing: false
                        }

                    } else {
                        return event
                    }
                })
            })

        })

    }

    handleCancel = (id) => {
        this.setState({
            events: this.state.events.map(event => {
                if (event.id === id) {
                    return { ...event, isEditing: false }

                } else {
                    return event
                }
            })
        })
    }

      render(){
          console.log(this.state.counter)
          const len = this.state.events.length
          return <Component key={this.displayName} len={len} {...this.props} {...this.state }
          handleAddEvent={this.handleAddEvent} 
          handleSaveAddEvent={this.handleSaveAddEvent}
          handleEdit={this.handleEdit}
          handleOnChange={this.handleOnChange}
          handleDelete={this.handleDelete}
          handleClose={this.handleClose}
          handleOnChangeEdit={this.handleOnChangeEdit}
          handleEditSave={this.handleEditSave}
          handleCancel={this.handleCancel}
          />
      }
  }
}

export default withEventData