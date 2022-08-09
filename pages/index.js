import React from "react";
import Link from "next/link";
import EventsList from "../components/events/EventList";

import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {

    const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
