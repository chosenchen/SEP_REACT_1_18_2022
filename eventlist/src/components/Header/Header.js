// import React from "react";
// import "./Header.css";
// import Button from "../Button/Button";

// class Header extends React.Component {
//   state = {
//       eventListClicked:false,
//       comingEventClicked:false

// };

//   render() {
//     return (
//       <header className="header-container">
//         <nav className="event-nav-bar">
//           <button>EventList</button>
//           <button>Coming Event</button>
//         </nav>
//       </header>
//     );
//   }
// }
// export default Header;
import React from "react";
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.showEventList = this.props.showEventList; 
        this.showComingEvents = this.props.showComingEvents; 
    }

    render() {
        return (
            <nav>
                <button onClick={this.showChangeEventList}>Current Event List</button>
                <button onClick={this.showComingEvents}>Coming Events</button>
            </nav>
        )
    }
}

export default Header;
