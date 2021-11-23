import { Pagination } from 'antd';
import EventCard from './EventCard';

const EventList = ({
  mainEvents, pageNumber, onChangePageNumber, maxPageSize, likeDisabled, goEventPage,
}) => (
  <>
    {mainEvents
      .slice((pageNumber - 1) * maxPageSize, Math.min(mainEvents.length, pageNumber * maxPageSize))
      .map((event) => (
        <EventCard
          key={event.id}
          eventPost={event}
          likeDisabled={likeDisabled}
          goEventPage={goEventPage}
        />
      ))}
    <Pagination
      style={{ textAlign: 'center', marginBottom: '20px' }}
      total={mainEvents.length}
      current={pageNumber}
      onChange={onChangePageNumber}
      defaultPageSize={maxPageSize}
    />
  </>
);

export default EventList;
