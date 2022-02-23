import React, { Component } from 'react'
import withEventList from '../HOC/withEventList';

import "./AllEvents.css"

class AllEvents extends Component {
    state = {
        addStatus: false,
        thead: ["EventName", "Start Date", "End Date", "Actions"],   
    }

    render() {
        let newTr;
        const { items, editItems } = this.props;
        if (this.state.addStatus) {
            newTr = (<tr>
                <td><input onChange={(e) =>
                    this.props.editChange(items.length, 'eventName', e.target.value)} />
                </td>
                <td><input type="date" onChange={(e) =>
                    this.props.editChange(items.length, 'startDate', e.target.value)} />
                </td>
                <td><input type="date" onChange={(e) =>
                    this.props.editChange(items.length, 'endDate', e.target.value)} />
                </td>
                <td><button onClick={() => {
                    this.setState({ addStatus: false })
                    this.props.addNewHandle()}}>SAVE</button><button onClick={() => {
                    this.setState({ addStatus: false })
                }}>CLOSE</button></td></tr>)
        }
        console.log(items)
        return (
                <section>
                    <div>
                        <button className="addbtn" onClick={() => {this.setState({ addStatus: true });
                    console.log(this.state.addStatus)}}>ADD NEW</button>
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
                                {items?.map(((item, index) => !this.props.isEditing ? (
                                    <tr key={item.id}>
                                        <td><input type="text" disabled={items[index].InputDisabled}
                                            value={items[index].eventName}
                                            onChange={(e) =>
                                                this.props.editChange(index, 'eventName', e.target.value)} /></td>
                                        <td><input type="date" disabled={items[index].InputDisabled}
                                            value={items[index].startDate} onChange={(e) =>
                                                this.props.editChange(index, 'startDate', e.target.value)} /></td>
                                        <td><input type="date" disabled={items[index].InputDisabled}
                                            value={items[index].endDate} onChange={(e) =>
                                                this.props.editChange(index, 'endDate', e.target.value)} /></td>

                                        <td><button onClick={() => {
                                            let status = items[index].eventStatus[0];
                                            if (status === "EDIT") {
                                                this.props.editHandle(index);
                                            }
                                            else if (status === "SAVE") {
                                                this.props.saveHandle(index);
                                            }
                                        }}>{items[index].eventStatus[0]}</button>
                                            <button onClick={() => {
                                                let status = items[index].eventStatus[1];
                                                if (status === "DELETE") {
                                                    this.props.deleteEvent(item.id, index);
                                                } else if (status === "CANCEL") {
                                                    this.props.cancelEvent(index);
                                                }

                                            }}>{items[index].eventStatus[1]}</button>
                                        </td>
                                    </tr>
                                ) : (<tr key={item.id}>
                                    <td><input type="text" disabled={editItems[index].InputDisabled}
                                        value={editItems[index].eventName}
                                        onChange={(e) =>
                                            this.props.editChange(index, 'eventName', e.target.value)} /></td>
                                    <td><input type="date" disabled={editItems[index].InputDisabled}
                                        value={editItems[index].startDate} onChange={(e) =>
                                            this.props.editChange(index, 'startDate', e.target.value)} /></td>
                                    <td><input type="date" disabled={editItems[index].InputDisabled}
                                        value={editItems[index].endDate} onChange={(e) =>
                                            this.props.editChange(index, 'endDate', e.target.value)} /></td>

                                    <td><button onClick={() => {
                                        let status = editItems[index].eventStatus[0];
                                        if (status === "EDIT") {
                                            this.props.editHandle(index);
                                        }
                                        else if (status === "SAVE") {
                                            this.props.saveHandle(index);
                                        }
                                    }}>{editItems[index].eventStatus[0]}</button>
                                        <button onClick={() => {
                                            let status = editItems[index].eventStatus[1];
                                            if (status === "DELETE") {
                                                this.props.deleteEvent(item.id, index);
                                            } else if (status === "CANCEL") {
                                                this.props.cancelEvent(index);
                                            }

                                        }}>{editItems[index].eventStatus[1]}</button>
                                    </td>
                                </tr>)))}
                                {newTr}
                            </tbody>
                        </table>
                    </section>
            </section>
            );
        }
    }

const AllEventsPage = withEventList(AllEvents);
export default AllEventsPage;