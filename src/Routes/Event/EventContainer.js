import EventPresenter from './EventPresenter';
import eventPosts from '../../mock/eventPosts.json';
// todo: get event uid from url and fetch currentPost
function EventContainer() {
  return (
    <EventPresenter currentPost={eventPosts.currentPost} />
  );
}

export default EventContainer;
