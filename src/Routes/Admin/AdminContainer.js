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

  const channelDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://univ-us-server.herokuapp.com/api/channel/${id}`, { withCredential: 'true' })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace('/admin');
        } else {
          window.alert('오류 발생');
        }
      });
  };

  const eventDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://univ-us-server.herokuapp.com/api/hostCenter/${id}`, { withCredential: 'true' })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace('/admin');
        } else {
          window.alert('오류 발생');
        }
      });
  };

  const userDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://univ-us-server.herokuapp.com/api/user/delete_user/${id}`, { withCredential: 'true' })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace('/admin');
        } else {
          window.alert('오류 발생');
        }
      });
  };

  useEffect(() => {
    axios.get('https://univ-us-server.herokuapp.com/api/channel/all', { withCredential: 'true' })
      .then((response) => {
        setChannels(response.data.data);
      });

    axios.get('https://univ-us-server.herokuapp.com/api/events/all_event', { withCredential: 'true' })
      .then((response) => {
        setEvents(response.data.data);
      });

    axios.get('https://univ-us-server.herokuapp.com/api/user/all_user', { withCredential: 'true' })
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
    setNum('3');
  }

  return (
    <AdminPresenter
      myNum={myNum}
      setNum={setNum}
      goOne={goOne}
      goTwo={goTwo}
      goThree={goThree}
      channelDelete={channelDelete}
      eventDelete={eventDelete}
      userDelete={userDelete}
      channels={channels}
      events={events}
      users={users}
    />
  );
}

export default AdminContainer;
