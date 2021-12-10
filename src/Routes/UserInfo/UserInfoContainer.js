import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import UserInfoPresenter from './UserInfoPresenter';
// import user from '../../mock/user.json';

function UserInfoContainer() {
  const history = useHistory();
  const [myName, setName] = useState('');
  const [myPh, setPh] = useState(''); // 전화번호
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/mypage/my_info', { withCredential: 'true' })
      .then((response) => {
        setUser(response.data.data[0]);
      });
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePh = (e) => {
    setPh(e.target.value);
  };

  function Save() {
    axios.put('http://localhost:3001/api/mypage/modify_info', {
      phone_num: myPh, // myPh가 입력창에 입력한 새 전화번호
    }, { withCredential: 'true' }).then((response) => {
      if (response.status === 200) {
        alert('저장되었습니다.');
        history.push('/home');
      } else {
        alert('오류 발생');
      }
    });
  }

  function ChangeName() {
    alert('변경되었습니다.');
  }

  function ChangePh() {
    alert('변경되었습니다.');
  }

  function DontGo() {
    alert('어딜 갈라고 그래');
  }

  return (
    <UserInfoPresenter
      Save={Save}
      ChangeName={ChangeName}
      ChangePh={ChangePh}
      DontGo={DontGo}
      myName={myName}
      myPh={myPh}
      setId={setName}
      setPh={setPh}
      onChangeName={onChangeName}
      onChangePh={onChangePh}
      user={user}
    />
  );
}

export default UserInfoContainer;
