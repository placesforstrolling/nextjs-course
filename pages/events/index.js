import {useRouter} from "next/router";

import { getAllEvents } from "../../helpers/api-util";
import EventList from '../../components/events/eventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = ({events}) => {

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

export async function getStaticProps() {

  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default EventsPage;
