import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MyPagePresenter from './MyPagePresenter';
import eventPosts from '../../mock/HostCenterMock/eventPosts.json';
import user from '../../mock/user.json';
import { LOAD_SUBSCRIBE_CHANNELS_REQUEST } from '../../reducers/user';

function MyPageContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    loadSubscribeChannelsLoading,
    loadSubscribeChannelsDone,
    loadSubscribeChannelsError,
    subscribeChannels,
  } = useSelector((state) => state.user);
  const [myNum, setNum] = useState('1');
  const [applied, setApplied] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/mypage/applied_event', { withCredential: 'true' })
      .then((response) => {
        setApplied(response.data.data);
        console.log(applied);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/events/user_like_event_list', { withCredential: 'true' })
      .then((response) => {
        setLiked(response.data.data);
        console.log(liked);
      });
  }, []);

  function goOne() {
    setNum('1');
  }

  function goTwo() {
    setNum('2');
  }

  function goThree() {
    dispatch({ type: LOAD_SUBSCRIBE_CHANNELS_REQUEST });
    setNum('3');
  }

  function goUserinfo() {
    history.push('/userinfo');
  }

  return (
    <MyPagePresenter
      goUserinfo={goUserinfo}
      myNum={myNum}
      setNum={setNum}
      goOne={goOne}
      goTwo={goTwo}
      goThree={goThree}
      channel={subscribeChannels}
      eventPosts={eventPosts}
      applied={applied}
      liked={liked}
      user={user}
      loading={loadSubscribeChannelsLoading}
      done={loadSubscribeChannelsDone}
      error={loadSubscribeChannelsError}
    />
  );
}

export default MyPageContainer;
