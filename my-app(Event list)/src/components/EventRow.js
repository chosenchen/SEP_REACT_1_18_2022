import React, { Component } from "react";

import { getDate, getMill } from "../ConvertDate.js";

import API from "../Api";

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: props.eventName,
            startDate: getDate(props.startDate),
            endDate: getDate(props.endDate),
            id: props.id,
            edit: false
            };

            // Save the base sate for cancel click
            this.baseSate = this.state;
            
            this.handleInputChange = this.handleInputChange.bind(this);

            this.handleEditRow = this.handleEditRow.bind(this);         

            this.handleDeleteRow = this.handleDeleteRow.bind(this);

            this.handleCancelRow = this.handleCancelRow.bind(this);

            this.handleUpdateRow = this.handleUpdateRow.bind(this);
        }
      
        // input change
        handleInputChange(e) {
            this.setState({ ...this.state, [e.target.name]: e.target.value });
        }
      
        // make row editable
        handleEditRow(e) {
            e.preventDefault();
            this.setState({ ...this.state, edit: true })
        }
      
        // cancel row, when click on cancel button, it will cancel editing and 
        // come back to state where editing was just started
        handleCancelRow() {
            this.setState(this.baseSate);
        }
      
        // delete row
        handleDeleteRow() {
            API.deleteEvent(this.state.id);
            window.location.reload();
        }
      
        handleUpdateRow() {
            const event = {
                eventName: this.state.eventName,
                startDate: getMill(this.state.startDate),
                endDate: getMill(this.state.endDate),
                id: this.state.id
            };
          // check to make sure that the iuput is not empty
            if ( this.state.eventName === "" 
                || this.state.startDate === "" 
                || this.state.endDate === "" ) {
                  alert("The table can not be empty. Please fullfill it.");
            } else {
                API.updateEvent(event, event.id);               
                this.setState({ ...this.state, edit: false });
                // window.location.reload();
            }
          }
      
        render() {
            return (
                <tr className="event-table-row">
                  <td>  
                    <input
                      type="text"
                      name="eventName"
                      onChange={this.handleInputChange}
                      value={this.state.eventName}
                      disabled={!this.state.edit}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="startDate"
                      onChange={this.handleInputChange}
                      value={this.state.startDate}
                      disabled={!this.state.edit}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="endDate"
                      onChange={this.handleInputChange}
                      value={this.state.endDate}
                      disabled={!this.state.edit}
                    />
                  </td>
                  <td>
                    {this.state.edit ? (
                      <div>
                        <button className="btn" onClick={this.handleUpdateRow}>Update</button>
                        <button className="btn" onClick={this.handleCancelRow}>Cancel</button>
                      </div>
                    ) : (
                      <div>
                        <button className="btn" onClick={this.handleEditRow}>Edit</button>
                        <button className="btn" onClick={this.handleDeleteRow}>Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
          );
        } 
}

