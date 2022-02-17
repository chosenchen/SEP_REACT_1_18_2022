import React from "react";
import EventTable from "./components/EventTable";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.setState({ addNew: true });
    console.log("add new");
  }

  render() {
    return <EventTable />;
  }
}

export default App;
