import React from "react";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import EventList from "../../components/EventList";
import ComingEventList from "../../components/ComingEventList";

const EventListContainer = () => {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("");

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
        return <EventList />;
      case "Coming Events":
        return <ComingEventList />;
      default:
        return <EventList />;
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
