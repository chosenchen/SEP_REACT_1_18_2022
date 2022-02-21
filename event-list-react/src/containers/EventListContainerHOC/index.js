import React from "react";

import Header from "../../components/Header";
import EventList from "../../components/EventList";
import ComingEventList from "../../components/ComingEventList";

class EventListContainer extends React.Component {
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
    const { currentTab, eventList } = this.state;

    switch (currentTab) {
      case "Events":
        return <EventList eventList={eventList} />;
      case "Coming Events":
        return <ComingEventList eventList={eventList} />;
      default:
        return <EventList eventList={eventList} />;
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
        {this.renderCurrentPanel()}
      </>
    );
  }
}

export default EventListContainer;
