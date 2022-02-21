import React from "react";
import { useState, useEffect } from "react";

import API from "../../api";
import Header from "../../components/Header";
import EventList from "../../components/EventList";
import ComingEventList from "../../components/ComingEventList";

class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      currentTab: "",
      eventList: [],
    };
  }

  componentDidMount() {
    API.getEventList().then((eventList) => {
      this.setState((prevState) => ({
        ...prevState,
        eventList: [...eventList],
        tabs: ["Events", "Coming Events"],
      }));
      this.setState((prevState) => ({
        ...prevState,
        currentTab: prevState.tabs[0],
      }));
    });
  }

  setEventList = (eventList) => {
    this.setState({ eventList: [...eventList] });
  };
  onPanelChange = (tab) => {
    this.setState({ currentTab: tab });
  };

  renderCurrentPanel = () => {
    const { currentTab, eventList } = this.state;

    switch (currentTab) {
      case "Events":
        return (
          <EventList eventList={eventList} setEventList={this.setEventList} />
        );
      case "Coming Events":
        return <ComingEventList eventList={eventList} />;
      default:
        return (
          <EventList eventList={eventList} setEventList={this.setEventList} />
        );
    }
  };

  render() {
    const { tabs, currentTab, eventList } = this.state;
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
