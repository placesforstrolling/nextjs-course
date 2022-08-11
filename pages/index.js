import React from "react";
import EventsList from "../components/events/EventList";

import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {

  return (
    <div>
      <EventsList events={props.events} />
    </div>
  );
};

export async function getStaticProps() {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

export default HomePage;
