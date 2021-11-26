import { useLocation } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
// import recommendationEvent from '../../mock/homeMock/recommendationEvents.json';
// import popularEvents from '../../mock/homeMock/popularEvents.json';
// import newEvents from '../../mock/homeMock/newEvents.json';
// import popularChannel from '../../mock/homeMock/popularChannel.json';

function HomeContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const [recommendationEvents, setrecommendationEvents] = useState([]);
  const [popularEvents, setpopularEvents] = useState([]);
  const [newEvents, setnewEvents] = useState([]);
  const [popularChannel, setpopularChannel] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/events/all_event').then((response) => {
      if (response.data.success) {
        console.log('all_event/success');
        console.log(response.data.data);
        setrecommendationEvents(response.data.data);
      } else {
        setrecommendationEvents(-1);
      }
    });

    axios.get('http://localhost:3001/api/events/get_popular_events').then((response) => {
      if (response.data.success) {
        console.log('all_event/success');
        console.log(response.data.data);
        setpopularEvents(response.data.data);
      } else {
        setpopularEvents(-1);
      }
    });

    axios.get('http://localhost:3001/api/events/get_new_events').then((response) => {
      if (response.data.success) {
        console.log('all_event/success');
        console.log(response.data.data);
        setnewEvents(response.data.data);
      } else {
        setnewEvents(-1);
      }
    });

    axios.get('http://localhost:3001/api/channel/all').then((response) => {
      if (response.data.success) {
        console.log('all_channel/success');
        console.log(response.data.data);
        setpopularChannel(response.data.data);
        console.log(popularChannel);
      } else {
        setpopularChannel(-1);
      }
    });
  }, []);

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
