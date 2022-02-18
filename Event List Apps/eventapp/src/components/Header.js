import React from "react";
import '../App.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.onPageChangeEventList = this.props.onPageChangeEventList; 
        this.onPageUpComingEvents = this.props.onPageUpComingEvents; 
    }

    render() {
        return (
            <nav>
                <button onClick={this.onPageChangeEventList}>Event List</button>
                <button onClick={this.onPageUpComingEvents}>Up Coming Events</button>
            </nav>
        )
    }
}

export default Header;