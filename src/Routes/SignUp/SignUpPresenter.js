// eslint-disable-next-line import/no-unresolved
import MiniFooter from 'Components/MiniFooter';
// eslint-disable-next-line import/no-unresolved
import MiniHeader from 'Components/MiniHeader';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

const SignupForm = styled.div`
  width: 500px;
  padding:25px;
  margin : 0 auto;
`;

const H1 = styled.h1`
  font-size:18px;
  line-height:35px;
  font-weight: bold;
`;

const MyRadio = styled.input`
  margin : 15px;
`;

const H2 = styled.h2`
  font-size:15px;
  line-height:35px;
`;

const MyInput = styled.input`
  display:block;
  width: 450px;
  height: 60px;
  margin: 15px auto;
  border : 3px solid whitesmoke;
  border-radius: 15px;
  background-color: white;
`;

const SignupBtn = styled.button`
  width: 450px;
  height: 60px;
  margin-top:25px;
  border-radius: 15px;
  background-color: #5C3FBF;
  font-weight: bold;
  color:white;
`;

function SignUpPresenter() {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <SignupForm>
          <H1>회원가입</H1>
          개인회원
          <MyRadio type="radio" id="huey" name="member" value="person" checked />
          학교/기관회원
          <MyRadio type="radio" id="huey" name="member" value="school" />
          <H2>아이디</H2>
          <MyInput type="text" />
          <H2>이름/기업명</H2>
          <MyInput type="text" />
          <H2>비밀번호</H2>
          <MyInput type="password" />
          <SignupBtn>
            회원가입
          </SignupBtn>
        </SignupForm>
      </Wrapper>
      <MiniFooter />
    </>
  );
}

export default SignUpPresenter;
