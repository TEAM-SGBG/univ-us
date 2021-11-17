// eslint-disable-next-line import/no-unresolved
import MiniFooter from 'Components/MiniFooter'; import styled from 'styled-components'; import { Link } from 'react-router-dom'; import MiniHeader from 'Components/MiniHeader';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
  display:flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

const Image = styled.div`
  width: 700px;
  padding: 25px;
  background-image:url('img/HappyLogin.png');
  background-position:center center;
  background-repeat: no-repeat;
`;

const LoginForm = styled.div`
  width: 500px;
  padding:25px;
`;

const LoginH1 = styled.h1`
  font-size:20px;
  line-height:35px;
  font-weight: bold;
`;

const LoginH2 = styled.span`
  font-size:15px;
  font-weight: bold;
`;

const LoginH3 = styled.span`
  font-size:15px;
  line-height:35px;
  color: #5C3FBF;
  font-weight: bold;
`;

const SigninGo = styled(Link)`
`;

const KakaoLoginBtn = styled.button`
  width: 225px;
  height: 60px;
  margin-top:25px;
  border : 3px solid whitesmoke;
  border-radius: 15px;
  background-color: white;
  font-weight: bold;
`;

const Hline = styled.hr`
  border:none;
  height:3px;
  margin: 25px 0;
  background-color:whitesmoke;
`;

const MyInput = styled.input`
  width: 450px;
  height: 60px;
  margin: 15px 0;
  border : 3px solid whitesmoke;
  border-radius: 15px;
  background-color: white;
`;

const LoginBtn = styled.button`
  width: 450px;
  height: 60px;
  margin-top:25px;
  border-radius: 15px;
  background-color: #5C3FBF;
  font-weight: bold;
  color:white;
`;

function LoginPresenter({ GoHome }) {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <Image />
        <LoginForm>
          <LoginH1>
            로그인
          </LoginH1>
          <LoginH2>
            유니버스가 처음이신가요?&nbsp;
          </LoginH2>
          <LoginH3>
            <SigninGo to="/signup">이메일로 회원가입</SigninGo>
          </LoginH3>
          <KakaoLoginBtn><a href="http://localhost:3001/auth/kakao">카카오 로그인</a></KakaoLoginBtn>
          <KakaoLoginBtn><a href="http://localhost:3001/auth/google">구글 로그인</a></KakaoLoginBtn>
          <Hline />
          <LoginH2>
            이메일(ID)
          </LoginH2>
          <MyInput type="email" />
          <LoginH2>
            비밀번호
          </LoginH2>
          <MyInput type="password" />
          <LoginBtn onClick={GoHome}>
            로그인
          </LoginBtn>
        </LoginForm>
      </Wrapper>
      <MiniFooter />
    </>
  );
}

export default LoginPresenter;
