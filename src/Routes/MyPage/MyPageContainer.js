import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import MyPagePresenter from './MyPagePresenter';
import eventPosts from '../../mock/HostCenterMock/eventPosts.json';
import user from '../../mock/user.json';
import { GET_SUBSCRIBE_CHANNELS_REQUEST } from '../../reducers/user';

function MyPageContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { subscribeChannels } = useSelector((state) => state.user);
  const [myNum, setNum] = useState('1');

  function goOne() {
    setNum('1');
  }

  function goTwo() {
    setNum('2');
  }

  function goThree() {
    dispatch({ type: GET_SUBSCRIBE_CHANNELS_REQUEST });
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
      user={user}
    />
  );
}

export default MyPageContainer;
