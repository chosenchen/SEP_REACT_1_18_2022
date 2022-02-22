import React from "react";

import {appApi} from "../.././appApi.js"

const withEventData = (Component) =>{

    return class NewComponent extends React.Component{

        constructor(props){
            super(props);
            this.state={
                eventList: []
            }
        }

        async componentDidMount(){
            const events = await appApi.getEvents();
            const updatedEvents = events.map((event)=>{
                event.isEditing= false
                return event;
            })

            this.setState({eventList: updatedEvents})
        }

        

        render(){

            return <Component {...this.props} eventList={this.state.eventList}/>
        }
    }
}

export default withEventData;