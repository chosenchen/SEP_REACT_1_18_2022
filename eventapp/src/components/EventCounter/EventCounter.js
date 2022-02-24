import React from "react";
import { useEventData } from "../../hooks/useEventData";

const EventCounter = () => {
  const { events } = useEventData();

  return <h1>{events.length}</h1>;
};

export default EventCounter;
