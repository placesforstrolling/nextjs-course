import {useRouter} from "next/router";

import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/eventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = () => {

  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Events Page</h1>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList events={events} />
    </>
  );
};

export default EventsPage;
