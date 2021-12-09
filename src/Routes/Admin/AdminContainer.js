import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import AdminPresenter from './AdminPresenter';
// import { LOAD_SUBSCRIBE_CHANNELS_REQUEST } from '../../reducers/user';

function AdminContainer() {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const {
  //   loadSubscribeChannelsLoading,
  //   loadSubscribeChannelsDone,
  //   loadSubscribeChannelsError,
  // } = useSelector((state) => state.user);
  const [myNum, setNum] = useState('1');
  const [channels, setChannels] = useState([]);
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/channel/all', { withCredential: 'true' })
      .then((response) => {
        setChannels(response.data.data);
      });

    axios.get('http://localhost:3001/api/events/all_event', { withCredential: 'true' })
      .then((response) => {
        setEvents(response.data.data);
      });

    axios.get('http://localhost:3001/api/user/all_user', { withCredential: 'true' })
      .then((response) => {
        setUsers(response.data.data);
      });

    console.log(channels);
    console.log(events);
    console.log(users);
  }, []);

  function goOne() {
    setNum('1');
  }

  function goTwo() {
    setNum('2');
  }

  function goThree() {
    setNum('3');
  }

  function deleteChannel() {

  }

  function deleteEvent() {

  }

  function deleteUSer() {

  }

  return (
    <AdminPresenter
      myNum={myNum}
      setNum={setNum}
      goOne={goOne}
      goTwo={goTwo}
      goThree={goThree}
      deleteChannel={deleteChannel}
      deleteEvent={deleteEvent}
      deleteUSer={deleteUSer}
      channels={channels}
      events={events}
      users={users}
    />
  );
}

export default AdminContainer;
