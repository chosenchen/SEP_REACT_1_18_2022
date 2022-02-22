import React from 'react'
import withEventData from '../HOC/withEventData'

class Counter extends React.Component {
  
    render(){
        console.log(this.props)   
        return (
            <h1>{`Total event items: ${this.props.len} `}</h1>
        )
    }

}



const EventCounter = withEventData(Counter)
export default EventCounter