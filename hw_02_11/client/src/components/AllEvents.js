import React, { Component } from 'react'
import API from './API';


export default class AllEvents extends Component {

    constructor() {
        super();
        this.state = {
            addStatus: false,
            isLoaded: false,
            del: 1,
            items: [{
                id: '',
                eventName: '',
                startDate: '',
                endDate: '',
                InputDisabled: "True",
                eventStatus: "EDIT"
            }],
            newItem: {
                id: '',
                eventName: '',
                startDate: '',
                endDate: '',
                InputDisabled: "True",
                eventStatus: "EDIT"
            }
        };
    };
  
    componentDidMount = () => {
        API.getEvents()
            .then((data) => {
                console.log(data)
                data.forEach((e) => {this.setState({
                        items:[...this.state.items, {
                            id: e.id,
                            eventName: e.eventName,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            InputDisabled: "True",
                            eventStatus: "EDIT"
                        }]
                    })}
                )
                this.setState({items: this.state.items.slice(1)})
            })
            .then((data) => {
                this.setState({
                    isLoaded: true,
                });
            })
    }

    deleteEvent = (id, index) => {
        fetch(`http://localhost:3005/events/${id}`, { method: "DELETE" })
            .then(() => {
                const newItems = this.state.items.filter((e) => { return e.id !== id });
                this.setState({ items: newItems})
                
            })
        
    };

    editHandle = (index) => {
        const newItems = this.state.items;
        newItems[index].eventStatus = "SAVE";
        newItems[index].InputDisabled = "";
        console.log(newItems[index])
        this.setState({ items: newItems })
    };

    saveHandle = (index) => {
        const newItems = this.state.items;
        newItems[index].eventStatus = "EDIT";
        newItems[index].InputDisabled = "True";
        this.setState({ items: newItems })

        const event = {
            eventName: newItems[index].eventName,
            startDate: newItems[index].startDate,
            endDate: newItems[index].endDate,
            id: newItems[index].id,
        }
        API.updateEvent(newItems[index].id, event)
    }

    editChange = (index, property, target) => {
        console.log(property);
        console.log(target);
        
        let items = this.state.items
    
        if ( this.state.items.length > index ){
            let newItems = this.state.items;
            newItems[index][property] = target;
            console.log(newItems)
            this.setState({ items: newItems })
            console.log(this.state.items)
        }
        
        else if ( index === items.length ) { 
            console.log(this.state.newItem.eventName)
            let newItem = this.state.newItem;
            newItem.id = index + 1;
            newItem[property] = target;
            console.log(newItem)
            this.setState({ newItem: newItem })
            console.log(this.state.newItem)
            
        }
        
    }

    addNewHandle = () => {
        this.setState({ items: [...this.state.items, this.state.newItem]})
        this.setState( {addStatus : false });
        const item = this.state.newItem;
        const event = {
            "eventName": item.eventName,
            "startDate": item.startDate,
            "endDate": item.endDate,
            "id": item.id
        }
        API.addEvent(event);
        console.log(this.state.newItem)
        console.log(this.state.items)
    }
    
    render() {
        let newTr;
        console.log(this.state.addStatus)
        if (this.state.addStatus) {
            newTr = (<tr>
                <td><input onChange={(e) => 
                    this.editChange(this.state.items.length, 'eventName', e.target.value)}/>
                    </td>
                <td><input onChange={(e) =>
                    this.editChange(this.state.items.length, 'startDate', e.target.value)}/>
                    </td>
                <td><input onChange={(e) =>
                    this.editChange(this.state.items.length, 'endDate', e.target.value)}/>
                    </td>
                <td><button onClick={() => this.addNewHandle()}>SAVE</button><button onClick={ () => {
                    this.setState({ addStatus: false })
                }}>DELETE</button></td></tr>)
        }
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                <div>
                <button className="addbtn" onClick={()=>this.setState({addStatus : true})}>ADD NEW</button>
                </div>
        
                <div className="event-container"></div>
                <table>
                    <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td><input type="text" disabled={this.state.items[index].InputDisabled} 
                                    value={this.state.items[index].eventName} 
                                    onChange={(e) => 
                                    this.eidChange(index, 'eventName', e.target.value) }/></td>
                            <td><input disabled={this.state.items[index].InputDisabled} 
                                    value={this.state.items[index].startDate} onChange={(e) =>
                                        this.editChange(index, 'startDate', e.target.value)}/></td>
                            <td><input disabled={this.state.items[index].InputDisabled} 
                                    value={this.state.items[index].endDate} onChange={(e) =>
                                        this.editChange(index, 'endDate', e.target.value)}/></td>
                        
                                <td><button onClick={() => {
                                    let status = this.state.items[index].eventStatus;
                                    if(status === "EDIT"){
                                        this.editHandle(index);
                                    }
                                    if(status === "SAVE"){
                                        this.saveHandle(index);
                                    }
                                    }}>{this.state.items[index].eventStatus}</button>
                                <button onClick={() => this.deleteEvent(item.id, index)}>DELETE</button>
                            </td>
                            </tr>
                        ))}
                        { newTr }
                    </tbody>
                </table>
                </>
            );
        }
    }
}
