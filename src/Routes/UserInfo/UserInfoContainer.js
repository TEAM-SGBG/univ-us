import { useState } from 'react';
import UserInfoPresenter from './UserInfoPresenter';

function UserInfoContainer() {
  const [myName, setName] = useState('');

  const [myPw, setPw] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(myName);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
    console.log(myPw);
  };

  function Save() {
    alert('저장되었습니다.');
    console.log('Saved');
    window.location.assign('/home');
  }

  function ChangeName() {
    console.log(myName);
    alert('변경되었습니다.');
  }

  function ChangePw() {
    console.log(myPw);
    alert('변경되었습니다.');
  }

  function DontGo() {
    alert('어딜 갈라고 그래');
    console.log('DontGo');
  }

  return (
    <UserInfoPresenter
      Save={Save}
      ChangeName={ChangeName}
      ChangePw={ChangePw}
      DontGo={DontGo}
      myName={myName}
      myPw={myPw}
      setId={setName}
      setPw={setPw}
      onChangeName={onChangeName}
      onChangePw={onChangePw}
    />
  );
}

export default UserInfoContainer;
