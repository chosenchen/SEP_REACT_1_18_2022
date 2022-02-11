import React, { Component } from 'react'

export default class AllEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            items: {
                data: [],
                InputDisabled: "True",
                eventStatus: "EDIT"
                },
            
        };
    };
  
    componentDidMount = () => {
        console.log(this.state.items.eventStatus)
        fetch('http://localhost:3005/events')
            .then(res => res.json())
            .then((data) => {
                
                this.setState(data.forEach((e) => ({
                        items:{
                            data: e,
                            InputDisabled: "True",
                            eventStatus: "EDIT"
                        }
                    }))
                )
                console.log(this.state.data)
            })
            .then((data) => {
                this.setState({
                    items: {
                        data: data,
                        InputDisabled: "True",
                        eventStatus: "EDIT"
                    },
                    isLoaded: true,
                });
            })
    }

    deleteEvent = (id) => {
        console.log(id)
        const delAndReload = (id)=>{
            console.log(id)
            fetch(`http://localhost:3005/events/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            this.componentDidMount();
        }
        return delAndReload(id)
    };

    editEvent = (id) => {
        this.setState(prevState => ({
            items: {                   // object that we want to update
                ...prevState.items,    // keep all other key-value pairs
                InputDisabled: "",
                eventStatus: "SAVE"     // update the value of specific key
        }}))
    };


    
    
    render() {
        
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <table>
                    <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {items.data.map(item => (
                            <tr key={item.id}>
                            <td><input disabled={this.state.items.InputDisabled} value={item.eventName} onChange={this.edit}/></td>
                            <td><input disabled={this.state.items.InputDisabled} value={item.startDate}/></td>
                            <td><input disabled={this.state.items.InputDisabled} value={item.endDate}/></td>
                            <td><button onClick={() => this.editEvent(
                                ()=>{

                                }
                            )}>{this.state.items.eventStatus}</button>
                                <button onClick={() => this.deleteEvent(item.id)}>DELETE</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            );
        }
    }
}
