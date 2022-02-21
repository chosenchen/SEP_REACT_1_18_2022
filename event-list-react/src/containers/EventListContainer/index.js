import React from "react";
import { useState, useEffect } from "react";

import API from "../../api";
import Header from "../../components/Header";
import EventList from "../../components/EventList";
import ComingEventList from "../../components/ComingEventList";

const EventListContainer = () => {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("");

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    API.getEventList().then((eventList) => {
      setEventList(eventList);
    });
  }, []);

  useEffect(() => {
    setTabs(["Events", "Coming Events"]);
  }, []);

  useEffect(() => {
    setCurrentTab(tabs[0]);
  }, [tabs]);

  const onPanelChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderCurrentPanel = () => {
    switch (currentTab) {
      case "Events":
        return <EventList eventList={eventList} setEventList={setEventList} />;
      case "Coming Events":
        return <ComingEventList eventList={eventList} />;
      default:
        return <EventList eventList={eventList} />;
    }
  };

  return (
    <>
      <Header
        tabs={tabs}
        currentTab={currentTab}
        onPanelChange={onPanelChange}
      />
      {renderCurrentPanel()}
    </>
  );
};

export default EventListContainer;
