import React, { Component } from 'react'
import API from './API';
import EpochTime from './EpochTime';


export default class AllEvents extends Component {

    constructor() {
        super();
        this.state = {
            thead: ["EventName","Start Date", "End Date", "Actions"],
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
        API.getAllEvents()
            .then((data) => {
                console.log(data)
                data.forEach((e) => {this.setState({
                        items:[...this.state.items, {
                            id: e.id,
                            eventName: e.eventName,
                            startDate: EpochTime.convertStringtoISO(e.startDate),
                            endDate: EpochTime.convertStringtoISO(e.endDate),
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
        let items = this.state.items
    
        if ( this.state.items.length > index ){
            let newItems = this.state.items;
            newItems[index][property] = target;
            this.setState({ items: newItems })
        }
        
        else if ( index === items.length ) { 
            
            let newItem = this.state.newItem;
            newItem.id = index + 1;
            newItem[property] = target;
            this.setState({ newItem: newItem })
        }
        
    }

    addNewHandle = () => {
        this.setState({ items: [...this.state.items, this.state.newItem]})
        this.setState( {addStatus : false });
        const item = this.state.newItem;
        const event = {
            "eventName": item.eventName,
            "startDate": EpochTime.convertDatetoString(item.startDate),
            "endDate": EpochTime.convertDatetoString(item.endDate),
            "id": item.id
        }
        API.addEvent(event);
    }
    
    render() {
        let newTr;
        if (this.state.addStatus) {
            newTr = (<tr>
                <td><input onChange={(e) => 
                    this.editChange(this.state.items.length, 'eventName', e.target.value)}/>
                    </td>
                <td><input type="date" onChange={(e) =>
                    this.editChange(this.state.items.length, 'startDate', e.target.value)}/>
                    </td>
                <td><input type="date" onChange={(e) =>
                    this.editChange(this.state.items.length, 'endDate', e.target.value)}/>
                    </td>
                <td><button onClick={() => this.addNewHandle()}>SAVE</button><button onClick={ () => {
                    this.setState({ addStatus: false })
                }}>DELETE</button></td></tr>)
        }
        const { error, isLoaded } = this.state;
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
        
                <section className="event-container">
                <table>
                    <thead>
                    <tr>
                        {
                            this.state.thead?.map( (e) => 
                                <th key={`${e}`}>{e}</th>
                            )
                        }
                    </tr></thead>
                    <tbody>
                        {this.state.items?.map((item, index) => (
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
                </section>
                </>
            );
        }
    }
}
