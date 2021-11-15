import { useState } from 'react';
import MyPagePresenter from './MyPagePresenter';
import channel from '../../mock/channel.json';
// import eventPosts from '../../mock/eventPosts.json';
import mainEvents from '../../mock/eventPosts.json';
import user from '../../mock/user.json';

function MyPageContainer() {
  const [myNum, setNum] = useState('1');

  function goOne() {
    setNum('1');
  }

  function goTwo() {
    setNum('2');
  }

  function goThree() {
    setNum('3');
  }

  function goUserinfo() {
    console.log('go userinfo');
    window.location.assign('/userinfo');
  }

  return (
    <MyPagePresenter
      goUserinfo={goUserinfo}
      myNum={myNum}
      setNum={setNum}
      goOne={goOne}
      goTwo={goTwo}
      goThree={goThree}
      channel={channel}
      eventPosts={mainEvents.eventPosts}
      user={user}
    />
  );
}

export default MyPageContainer;
