import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <ul>
                    <li key="1" className="eventList" onClick = {this.props.handleHeaderOnClick}>EventList</li>
                    <li key="2" className="comingEvents" onClick = {this.props.handleHeaderOnClick}>ComingEvents</li>
                </ul>
            </header>
        )
    }
}