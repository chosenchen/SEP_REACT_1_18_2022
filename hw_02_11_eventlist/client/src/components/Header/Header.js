import React, { Component } from 'react';
import ComingEvent from '../ComingEvent/ComingEvent';
import AllEvents from '../AllEvents/AllEvents';
import API from '../API/API';
import EpochTime from '../EpochTime/EpochTime';
import "./Header.css";

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            showPage: "home",
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

    fetchAllData = () => {
        API.getAllEvents()
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
                this.setState({ items: this.state.items.slice(1), editItems: this.state.editItems.slice(1) });

                console.log(this.state.items)
                this.setState({
                    isLoaded: true,
                });
            })
    }
    componentDidMount = () => {
        this.fetchAllData();
    }

    clickHandle1 = () => {
        this.setState({ showPage: "home" })
    }
    clickHandle2 = () => {
        this.setState({ showPage: "coming" })
    }
    render() {
        return (
            <div>
                <ul>
                    <li><button onClick={this.clickHandle1}>HOME</button></li>
                    <li><button onClick={this.clickHandle2}>COMING EVENT</button></li>
                </ul>
                {this.state.showPage === "home" ? (<>
                    <header>
                        <h1>Event List App</h1>
                    </header>
                    <div className="container">
                        <AllEvents state={this.state} />
                    </div></>) : (<ComingEvent eventData={this.state.items} />)
                }

            </div>
        )
    }
}
