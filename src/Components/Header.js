import styled from 'styled-components';

const HeaderBackground = styled.div`
    padding: 30px 60px;
    height: 162px;
    width: 1200px;
    background-color: white;
`;

const SignInButton = styled.button`
    margin-left: 820px;
    padding: 0 20px;
    height: 32px;
    background: #FAF8FF;
    border-radius: 16px;
    border: none;
`;

const LoginButton = styled.button`
    padding: 0 20px;
    margin-left: 16px;
    height: 32px;
    background: #FAF8FF;
    border-radius: 16px;
    border: none;
`;

const ButtonText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.42px;
    color: #5C3FBF;
`;

const Header = () => (
  <HeaderBackground>
    <img alt="logo" src="img/logo.png" />
    <SignInButton>
      <ButtonText>회원 가입</ButtonText>
    </SignInButton>
    <LoginButton>
      <ButtonText>로그인</ButtonText>
    </LoginButton>
  </HeaderBackground>
);

export default Header;
