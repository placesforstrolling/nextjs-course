import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/eventList";

const EventDatePage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">No date selected</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p className="center">Invalid filter :(</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  console.log(filteredEvents);

  if (!filteredEvents.length) {
    return <p className="center">No events found :(</p>;
  }

  return (
    <>
      <EventsList events={filteredEvents}/>
    </>
  );
};

export default EventDatePage;
