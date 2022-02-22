import React from 'react';
import API from '../../utils/API/API';
import EpochTime from '../../utils/EpochTime/EpochTime';

const withEventList = (Component) => {
    return class NewComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
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
                },
                
                isEditing: false,
        }}

        componentDidMount() {
            API.getAllEvents()
                .then((data) => {
                    console.log(data)
                    data.forEach((e) => {
                        this.setState({
                            isLoaded: true,
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
                }).then(() => {
                    this.setState({
                        items: this.state.items.slice(1),
                        editItems: this.state.editItems.slice(1),
                    });
                })
        }

        deleteEvent = (id, index) => {
            fetch(`http://localhost:3005/events/${id}`, { method: "DELETE" })
                .then(() => {
                    const newItems = this.state.items.filter((e) => { return e.id !== id });
                    this.setState({ items: newItems })
            })
        }

        cancelEvent = (eventIndex) => {
            const newItems = this.state.editItems;
            newItems[eventIndex].eventStatus = ["EDIT", "DELETE"];
            newItems[eventIndex].InputDisabled = true;
            this.setState({ items: newItems, isEditing: false })
        }

        editHandle = (eventIndex) => {
            console.log(this.state.editItems[eventIndex].eventStatus)
            const newItems = this.state.editItems;
            newItems[eventIndex].eventStatus = ["SAVE", "CANCEL"];
            newItems[eventIndex].InputDisabled = "";
            this.setState({ items: newItems, isEditing: true })
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
            console.log(this.state.items)
            API.updateEvent(newItems[index].id, event)
        }

        editChange = (index, property, target) => {
            if (this.state.isEditing === false) {
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
                let editItems = this.state.editItems;
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
            const event = {
                "eventName": item.eventName,
                "startDate": EpochTime.convertDatetoString(item.startDate),
                "endDate": EpochTime.convertDatetoString(item.endDate),
            }
            console.log(event)
            API.addEvent(event);
        }

        render() {
            const {items, ...restProps} = this.state;
            return (
            <Component {...restProps} items = {items} 
            deleteEvent = {this.deleteEvent}
            cancelEvent = {this.cancelEvent}
            editHandle = {this.editHandle}
            saveHandle = {this.saveHandle}
            editChange = {this.editChange}
            addNewHandle = {this.addNewHandle}/>
        )}
    }
}

export default withEventList;
