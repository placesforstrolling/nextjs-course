import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

import EventSummary from "../../components/event-detail/eventSummary";
import EventLogistics from "../../components/event-detail/eventLogistics";
import EventContent from "../../components/event-detail/eventContent";

const EventPage = ({ event }) => {
  if (!event) {
    return <div>No event id provided</div>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {

  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({params: {eventId: event.id}}))
  console.log(paths);

  return {
    paths,
    fallback: 'blocking',
  };
}

export default EventPage;
