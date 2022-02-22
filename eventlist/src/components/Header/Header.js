import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.showEventList = this.props.showEventList;
    console.log(this.props.showEventList);
    this.showComingEvents = this.props.showComingEvents;
    console.log(this.props.showComingEvents);
  }

  render() {
    return (
      <nav>
        <button onClick={this.showEventList}>Current Event List</button>
        <button onClick={this.showComingEvents}>Coming Events</button>
      </nav>
    );
  }
}

export default Header;
