import { useHistory } from 'react-router';
import EventInfoPresenter from './EventInfoPresenter';

const EventInfoContainer = () => {
  const history = useHistory();

  const goEventPage = useCallback(() => {
    history.push(`/events/${eventPost.id}`);
  }, []);

  return (
    <EventInfoPresenter goEventPage={goEventPage} />
  );
};

export default EventInfoContainer;
