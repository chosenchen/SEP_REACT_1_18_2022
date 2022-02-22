import React from "react";

import '../App.css';

import EventCounter from '../components/eventCounter';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.onPageChangeEventList = this.props.onPageChangeEventList; 
        this.onPageUpComingEvents = this.props.onPageUpComingEvents; 
    }

    render() {
        return (
            <nav>
                <button className="nav-btn" onClick={this.onPageChangeEventList}>Event List</button>
                <button className="nav-btn" onClick={this.onPageUpComingEvents}>Up Coming Events</button>
                <EventCounter />
            </nav>
        )
    }
}

export default Header;