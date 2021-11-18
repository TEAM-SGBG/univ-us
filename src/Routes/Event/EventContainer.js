import EventPresenter from './EventPresenter';
import currentPost from '../../mock/HostCenterMock/currentPost.json';
// todo: get event uid from url and fetch currentPost
function EventContainer() {
  return (
    <EventPresenter currentPost={currentPost} />
  );
}

export default EventContainer;
