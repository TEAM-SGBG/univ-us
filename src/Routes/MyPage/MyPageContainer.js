import { useState } from 'react';
import MyPagePresenter from './MyPagePresenter';

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
    />
  );
}

export default MyPageContainer;
