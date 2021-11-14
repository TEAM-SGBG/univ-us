import Footer from 'Components/Footer';
import MiniHeader from 'Components/MiniHeader';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
  padding:60px;
`;

const LoginH1 = styled.h1`
  font-size:22px;
  line-height:35px;
  display:block;
  margin-bottom:60px;
`;

const LoginH2 = styled.h2`
  font-size:14px;
  display:block;
  margin : 30px 0;
`;

const Hline = styled.hr`
  border:none;
  height:3px;
  margin: 25px 0;
  background-color:whitesmoke;
`;

const MyInput = styled.input`
  width: 150px;
  height: 30px;
  border : 3px solid whitesmoke;
  border-radius: 5px;
  background-color: white;
`;

const ConfirmBtn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #5C3FBF;
  color:white;
`;

const SaveBtn = styled.button`
  width: 225px;
  height: 60px;
  margin-top:25px;
  border : 3px solid whitesmoke;
  border-radius: 10px;
  background-color: #5C3FBF;
  color:white;
`;

const Dontgo = styled.div`
  font-size: 14px;
  color:gray;
  display:block;
  margin-left: 1000px;
  width:200px;
`;

function UserInfoPresenter({
  Save, ChangeName, ChangePw, DontGo, onChangeName, onChangePw,
}) {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <LoginH1>
          회원정보수정
        </LoginH1>
        <LoginH2>
          기본정보수정
        </LoginH2>
        <Hline />
        <LoginH2>
          이메일(ID)
        </LoginH2>
        <LoginH2>
          ssumthingood@gmail.com
        </LoginH2>
        <LoginH2>
          이름/기업명
        </LoginH2>
        <MyInput type="email" onChange={onChangeName} />
        <ConfirmBtn onClick={ChangeName}>
          변경
        </ConfirmBtn>
        <LoginH2>
          비밀번호
        </LoginH2>
        <MyInput type="password" onChange={onChangePw} />
        <ConfirmBtn onClick={ChangePw}>
          변경
        </ConfirmBtn>
        <Hline />
        <SaveBtn onClick={Save}>
          회원정보 저장하기
        </SaveBtn>
        <Dontgo onClick={DontGo}>유니버스 탈퇴하기</Dontgo>
      </Wrapper>
      <Footer />
    </>
  );
}

export default UserInfoPresenter;
