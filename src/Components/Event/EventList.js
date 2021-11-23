import { Pagination } from 'antd';
import EventCard from './EventCard';

const EventList = ({
  events, pageNumber, onChangePageNumber, maxPageSize, likeDisabled,
}) => (
  <>
    {events
      .slice((pageNumber - 1) * maxPageSize, Math.min(events.length, pageNumber * maxPageSize))
      .map((event) => <EventCard key={event.event_id} eventPost={event} likeDisabled={likeDisabled} />)}
    <Pagination
      style={{ textAlign: 'center', marginBottom: '20px' }}
      total={events.length}
      current={pageNumber}
      onChange={onChangePageNumber}
      defaultPageSize={maxPageSize}
    />
  </>
);

export default EventList;
