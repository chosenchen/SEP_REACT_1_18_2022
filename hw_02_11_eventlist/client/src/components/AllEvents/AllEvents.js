import React, { Component } from 'react'
import API from '../API/API';
import EpochTime from '../EpochTime/EpochTime';


export default class AllEvents extends Component {

    constructor() {
        super();
        this.state = {
            thead: ["EventName", "Start Date", "End Date", "Actions"],
            addStatus: false,
            isLoaded: false,
            isEditing: false,
            del: 1,
            items: [{
                id: '',
                eventName: '',
                startDate: '',
                endDate: '',
                InputDisabled: "True",
                eventStatus: ["EDIT", "DELETE"]
            }],
            editItems: [{
                id: '',
                eventName: '',
                startDate: '',
                endDate: '',
                InputDisabled: "True",
                eventStatus: ["EDIT", "DELETE"]
            }],
            newItem: {
                id: '',
                eventName: '',
                startDate: '',
                endDate: '',
                InputDisabled: "True",
                eventStatus: ["EDIT", "DELETE"]
            }
        };
    };

    fetchAllData = () =>{ API.getAllEvents()
        .then((data) => {
            console.log(data)
            data.forEach((e) => {
                this.setState({
                    items: [...this.state.items, {
                        id: e.id,
                        eventName: e.eventName,
                        startDate: EpochTime.convertStringtoISO(e.startDate),
                        endDate: EpochTime.convertStringtoISO(e.endDate),
                        InputDisabled: "True",
                        eventStatus: ["EDIT", "DELETE"]
                    }],
                    editItems: [...this.state.items, {
                        id: e.id,
                        eventName: e.eventName,
                        startDate: EpochTime.convertStringtoISO(e.startDate),
                        endDate: EpochTime.convertStringtoISO(e.endDate),
                        InputDisabled: "True",
                        eventStatus: ["EDIT", "DELETE"]
                    }]
                })
            }
            )
            this.setState({ items: this.state.items.slice(1), editItems: this.state.editItems.slice(1)});
            
        }).then((data) => {
            this.setState({
                isLoaded: true,
            });
        })}
    componentDidMount = () => {
        this.fetchAllData();    
    }

    deleteEvent = (id, index) => {
        fetch(`http://localhost:3005/events/${id}`, { method: "DELETE" })
            .then(() => {
                const newItems = this.state.items.filter((e) => { return e.id !== id });
                this.setState({ items: newItems })

            })

    };

    cancelEvent = (eventIndex) => {
        const newItems = this.state.editItems;
        newItems[eventIndex].eventStatus = ["EDIT", "DELETE"];
        newItems[eventIndex].InputDisabled = true;
        this.setState({ items: newItems, isEditing: false })
    }

    editHandle = (eventIndex) => {
        const newItems = this.state.editItems;
        newItems[eventIndex].eventStatus = ["SAVE", "CANCEL"];
        newItems[eventIndex].InputDisabled = "";
        this.setState({ items: newItems , isEditing: true})
    };

    saveHandle = (index) => {
        const newItems = this.state.items;
        newItems[index].eventStatus = ["EDIT", "DELETE"];
        newItems[index].InputDisabled = "True";
        this.setState({ items: newItems })

        const event = {
            eventName: newItems[index].eventName,
            startDate: EpochTime.convertDatetoString(newItems[index].startDate),
            endDate: EpochTime.convertDatetoString(newItems[index].endDate),
            id: newItems[index].id,
        }
        console.log(newItems[index])
        API.updateEvent(newItems[index].id, event)
    }

    editChange = (index, property, target) => {
        if( this.state.isEditing === false){
            let items = this.state.items;
            if (this.state.items.length > index) {
                let newItems = this.state.items;
                newItems[index][property] = target;
                this.setState({ items: newItems })
            } else if (index === items.length) {
                let newItem = this.state.newItem;
                newItem[property] = target;
                this.setState({ newItem: newItem })
            };
        } else {
            let editItems = this.state.eidtItems;
            if (this.state.editItems.length > index) {
                let newItems = this.state.editItems;
                newItems[index][property] = target;
                this.setState({ eidtItems: newItems })
            } else if (index === editItems.length) {
                let newItem = this.state.newItem;
                newItem[property] = target;
                this.setState({ newItem: newItem })
            };
            console.log(this.state.editItems)
        }
    }

    addNewHandle = () => {
        this.setState({ items: [...this.state.items, this.state.newItem] });
        this.setState({ addStatus: false });
        const item = this.state.newItem;
        console.log(item)
        const event = {
            "eventName": item.eventName,
            "startDate": EpochTime.convertDatetoString(item.startDate),
            "endDate": EpochTime.convertDatetoString(item.endDate),
         
        }
        console.log(event)
        API.addEvent(event);
    }

    render() {
        let newTr;
        if (this.state.addStatus) {
            newTr = (<tr>
                <td><input onChange={(e) =>
                    this.editChange(this.state.items.length, 'eventName', e.target.value)} />
                </td>
                <td><input type="date" onChange={(e) =>
                    this.editChange(this.state.items.length, 'startDate', e.target.value)} />
                </td>
                <td><input type="date" onChange={(e) =>
                    this.editChange(this.state.items.length, 'endDate', e.target.value)} />
                </td>
                <td><button onClick={() => this.addNewHandle()}>SAVE</button><button onClick={() => {
                    this.setState({ addStatus: false })
                }}>CLOSE</button></td></tr>)
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
                        <button className="addbtn" onClick={() => this.setState({ addStatus: true })}>ADD NEW</button>
                    </div>

                    <section className="event-container">
                        <table>
                            <thead>
                                <tr>
                                    {
                                        this.state.thead?.map((e) =>
                                            <th key={`${e}`}>{e}</th>
                                        )
                                    }
                                </tr></thead>
                            <tbody>
                                {this.state.items?.map(((item, index) => !this.state.isEditing ?(
                                    <tr key={item.id}>
                                        <td><input type="text" disabled={this.state.items[index].InputDisabled}
                                            value={this.state.items[index].eventName}
                                            onChange={(e) =>
                                                this.editChange(index, 'eventName', e.target.value)} /></td>
                                        <td><input type="date" disabled={this.state.items[index].InputDisabled}
                                            value={this.state.items[index].startDate} onChange={(e) =>
                                                this.editChange(index, 'startDate', e.target.value)} /></td>
                                        <td><input type="date" disabled={this.state.items[index].InputDisabled}
                                            value={this.state.items[index].endDate} onChange={(e) =>
                                                this.editChange(index, 'endDate', e.target.value)} /></td>

                                        <td><button onClick={() => {
                                            let status = this.state.items[index].eventStatus[0];
                                            if (status === "EDIT") {
                                                this.editHandle(index);
                                            }
                                            else if (status === "SAVE") {
                                                this.saveHandle(index);
                                            }
                                        }}>{this.state.items[index].eventStatus[0]}</button>
                                            <button onClick={() =>{ 
                                            let status= this.state.items[index].eventStatus[1];
                                            if ( status === "DELETE"){
                                                this.deleteEvent(item.id, index);
                                            } else if ( status === "CANCEL"){
                                                this.cancelEvent(index);
                                            }
                                                    
                                            }}>{this.state.items[index].eventStatus[1]}</button>
                                        </td>
                                    </tr>
                                ) : (<tr key={item.id}>
                                    <td><input type="text" disabled={this.state.editItems[index].InputDisabled}
                                            value={this.state.editItems[index].eventName}
                                        onChange={(e) =>
                                        this.editChange(index, 'eventName', e.target.value)} /></td>
                                    <td><input type="date" disabled={this.state.editItems[index].InputDisabled}
                                        value={this.state.editItems[index].startDate} onChange={(e) =>
                                        this.editChange(index, 'startDate', e.target.value)} /></td>
                                    <td><input type="date" disabled={this.state.editItems[index].InputDisabled}
                                        value={this.state.editItems[index].endDate} onChange={(e) =>
                                        this.editChange(index, 'endDate', e.target.value)} /></td>

                                    <td><button onClick={() => {
                                            let status = this.state.editItems[index].eventStatus[0];
                                        if (status === "EDIT") {
                                            this.editHandle(index);
                                        }
                                        else if (status === "SAVE") {
                                            this.saveHandle(index);
                                        }
                                        }}>{this.state.editItems[index].eventStatus[0]}</button>
                                        <button onClick={() => {
                                                let status = this.state.editItems[index].eventStatus[1];
                                            if (status === "DELETE") {
                                                this.deleteEvent(item.id, index);
                                            } else if (status === "CANCEL") {
                                                this.cancelEvent(index);
                                            }

                                            }}>{this.state.editItems[index].eventStatus[1]}</button>
                                    </td>
                                </tr>)))}
                                {newTr}
                            </tbody>
                        </table>
                    </section>
                </>
            );
        }
    }
}
