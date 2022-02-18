import react from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import EventTable from "../EventTable";
import ComingEvent from "../ComingEvent/ComingEvent";

class Header extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Header</h1>;
  }
}
export default Header;
