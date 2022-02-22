import React from 'react';
import './NavBar.css';
import EventCounter from '.././EventCounter/EventCounter.js';

class NavBar extends React.Component{

    render(){
        return(
            <header className="page-header">
                <ul>
                    <li name="eventList" onClick={this.props.handleNavLinkOnClick}>Event List</li>
                    <li name="upcomming" onClick={this.props.handleNavLinkOnClick}>Upcomming Events</li>
                    <li><EventCounter/></li>
                </ul>
               
            </header>
        )
    }

}

export default NavBar;