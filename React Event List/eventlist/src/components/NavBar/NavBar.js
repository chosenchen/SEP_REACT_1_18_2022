import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{

    render(){
        return(
            <header className="page-header">
                <ul>
                    <li name="eventList" onClick={this.props.handleNavLinkOnClick}>Event List</li>
                    <li name="upcomming" onClick={this.props.handleNavLinkOnClick}>Upcomming Events</li>
                </ul>
            </header>
        )
    }

}

export default NavBar;