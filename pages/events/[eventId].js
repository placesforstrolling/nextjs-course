import {useRouter} from 'next/router';
import {getEventById} from '../../dummy-data';

import EventSummary from '../../components/event-detail/eventSummary';
import EventLogistics from '../../components/event-detail/eventLogistics';
import EventContent from '../../components/event-detail/eventContent'; 

const EventPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <div>No event id provided</div>;
  }
  return (
    <>
    <EventSummary title={event.title} />
    <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    </>
  )
}

export default EventPage