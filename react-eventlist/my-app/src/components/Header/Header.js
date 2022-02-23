import react from "react";
import "./Header.css";

class Header extends react.Component {
  handleNav = (e) => {
    if (e.target.className === "events") {
      this.props.showComponent(true, false);
    }
    if (e.target.className === "comingEvents") {
      this.props.showComponent(false, true);
    }
  };
  render() {
    return (
      <nav>
        <li className="events" onClick={this.handleNav}>
          Events
        </li>
        <li className="comingEvents" onClick={this.handleNav}>
          Coming Events
        </li>
      </nav>
    );
  }
}
export default Header;
