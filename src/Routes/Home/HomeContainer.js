import { useLocation } from 'react-router';
// import {  useCallback } from 'react';
// import { useHistory } from 'react-router';
import HomePresenter from './HomePresenter';
import recommendationEvents from '../../mock/homeMock/recommendationEvents.json';
import popularEvents from '../../mock/homeMock/popularEvents.json';
import newEvents from '../../mock/homeMock/newEvents.json';
import popularChannel from '../../mock/homeMock/popularChannel.json';

function HomeContainer() {
  // const history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  return (
    <HomePresenter
      recommendationEvents={recommendationEvents}
      popularEvents={popularEvents}
      newEvents={newEvents}
      popularChannel={popularChannel}
      type={query.get('type')}
    />
  );
}

export default HomeContainer;
