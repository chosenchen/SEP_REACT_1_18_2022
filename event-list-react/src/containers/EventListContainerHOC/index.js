import React from "react";

import Header from "../../components/Header";
import EventList from "../../components/EventList";
import ComingEventList from "../../components/ComingEventList";
import EventListCounterHOC from "../../components/EventListCounter";

class EventListContainerHOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      currentTab: "",
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      tabs: ["Events", "Coming Events"],
    }));
    this.setState((prevState) => ({
      ...prevState,
      currentTab: prevState.tabs[0],
    }));
  }

  onPanelChange = (tab) => {
    this.setState({ currentTab: tab });
  };

  renderCurrentPanel = () => {
    const { currentTab } = this.state;

    switch (currentTab) {
      case "Events":
        return <EventList />;
      case "Coming Events":
        return <ComingEventList />;
      default:
        return <EventList />;
    }
  };

  render() {
    const { tabs, currentTab } = this.state;
    return (
      <>
        <Header
          tabs={tabs}
          currentTab={currentTab}
          onPanelChange={this.onPanelChange}
        />
        <div>
          <p>
            Counter <EventListCounterHOC />
          </p>
        </div>
        {this.renderCurrentPanel()}
      </>
    );
  }
}

export default EventListContainerHOC;
