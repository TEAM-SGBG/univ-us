import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import AdminPresenter from './AdminPresenter';
import user from '../../mock/user.json';
// import { LOAD_SUBSCRIBE_CHANNELS_REQUEST } from '../../reducers/user';

function AdminContainer() {
  const history = useHistory();
  // const dispatch = useDispatch();
  const {
    loadSubscribeChannelsLoading,
    loadSubscribeChannelsDone,
    loadSubscribeChannelsError,
    // suby
    scribeChannels,
  } = useSelector((state) => state.user);
  const [myNum, setNum] = useState('1');
  const [channels, setChannels] = useState([]);
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/channel/all', { withCredential: 'true' })
      .then((response) => {
        setChannels(response.data.data);
      });

    axios.post('http://localhost:3001/api/events/all_events', { withCredential: 'true' })
      .then((response) => {
        setEvents(response.data.data);
      });

    axios.get('http://localhost:3001/api/mypage/subscribe_info', { withCredential: 'true' })
      .then((response) => {
        setUsers(response.data.data);
      });
  }, []);

  function goOne() {
    setNum('1');
  }

  function goTwo() {
    setNum('2');
  }

  function goThree() {
    // dispatch({ type: LOAD_SUBSCRIBE_CHANNELS_REQUEST });
    setNum('3');
  }

  function goUserinfo() {
    history.push('/userinfo');
  }

  return (
    <AdminPresenter
      goUserinfo={goUserinfo}
      myNum={myNum}
      setNum={setNum}
      goOne={goOne}
      goTwo={goTwo}
      goThree={goThree}
      channels={channels}
      events={events}
      users={users}
      user={user}
      loading={loadSubscribeChannelsLoading}
      done={loadSubscribeChannelsDone}
      error={loadSubscribeChannelsError}
    />
  );
}

export default AdminContainer;
