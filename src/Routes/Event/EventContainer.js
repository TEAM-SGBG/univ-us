import { useLocation } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EventPresenter from './EventPresenter';
// import currentPost from '../../mock/HostCenterMock/currentPost.json';

// todo: get event uid from url and fetch currentPost
function EventContainer() {
  const [event, setEvent] = useState([]);
  const [channel, setChannel] = useState({});
  const location = useLocation();
  const eventNum = location.pathname.split('/')[2];
  const varE = { event_id: eventNum };

  useEffect(() => {
    axios.post('http://localhost:3001/api/events/detail', varE).then((response) => {
      if (response.data.success) {
        setEvent(response.data.data[0]);
        axios.get(`http://localhost:3001/api/channel/info/${response.data.data[0].channel_id}`).then((response1) => {
          if (response1.data.success) {
            setChannel(response1.data.data);
          }
        });
      } else {
        setEvent(-1);
      }
    });
  }, []);

  return (
    <EventPresenter currentPost={event} currentChannel={channel} />
  );
}

export default EventContainer;
