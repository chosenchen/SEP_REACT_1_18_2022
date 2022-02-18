import React from "react";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import EventList from "../../components/EventList";

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

  return (
    <>
      <Header
        tabs={tabs}
        currentTab={currentTab}
        onPanelChange={onPanelChange}
      />
      {currentTab}
      <EventList />
    </>
  );
};

export default EventListContainer;
