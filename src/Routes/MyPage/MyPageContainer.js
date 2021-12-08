import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import MyPagePresenter from './MyPagePresenter';
import user from '../../mock/user.json';
// import { LOAD_SUBSCRIBE_CHANNELS_REQUEST } from '../../reducers/user';

function MyPageContainer() {
  const history = useHistory();
  // const dispatch = useDispatch();
  const {
    loadSubscribeChannelsLoading,
    loadSubscribeChannelsDone,
    loadSubscribeChannelsError,
    // subscribeChannels,
  } = useSelector((state) => state.user);
  const [myNum, setNum] = useState('1');
  const [applied, setApplied] = useState([]);
  const [liked, setLiked] = useState([]);
  const [subscribed, setSubscribed] = useState([]);

  useEffect(() => {
    axios.get('https://univ-us-server.herokuapp.com/api/mypage/applied_event', { withCredential: 'true' })
      .then((response) => {
        setApplied(response.data.data);
      });

    axios.post('https://univ-us-server.herokuapp.com/api/events/user_like_event_list', { withCredential: 'true' })
      .then((response) => {
        setLiked(response.data.data);
      });

    axios.get('https://univ-us-server.herokuapp.com/api/mypage/subscribe_info', { withCredential: 'true' })
      .then((response) => {
        setSubscribed(response.data.data);
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
    <MyPagePresenter
      goUserinfo={goUserinfo}
      myNum={myNum}
      setNum={setNum}
      goOne={goOne}
      goTwo={goTwo}
      goThree={goThree}
      // channel={subscribeChannels}
      applied={applied}
      liked={liked}
      subscribed={subscribed}
      user={user}
      loading={loadSubscribeChannelsLoading}
      done={loadSubscribeChannelsDone}
      error={loadSubscribeChannelsError}
    />
  );
}

export default MyPageContainer;
