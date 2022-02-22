import React from "react";
import "./Header.css";
import EventCounter from "../eventCounter/EventCounter";

export default class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <ul>
                    <li name="eventList" onClick = {this.props.handleHeaderOnClick}>Event List</li>
                    <li name="comingEvents" onClick = {this.props.handleHeaderOnClick}>Coming Events</li>
                    <li><EventCounter /></li>
                </ul>
            </header>
        )
    }
}