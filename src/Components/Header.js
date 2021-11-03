import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBackground = styled.div`
  margin: 0 auto;
  padding: 30px 60px;
  padding-bottom: 0px;
  margin-bottom: 20px;
  height: 162px;
  width: 1200px;
  background-color: white;
`;

const SignInButton = styled.button`
  margin-left: 680px;
  padding: 0 20px;
  width:90px;
  height: 32px;
  background: #FAF8FF;
  border-radius: 16px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.42px;
  color: #5C3FBF;
  &:hover{
        color:white;
        background-color:#5C3FBF;
    }
`;

const LoginButton = styled.button`
  width:90px;
  height: 32px;
  padding: 0 20px;
  margin-left: 16px;
  background: #FAF8FF;
  border-radius: 16px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.42px;
  color: #5C3FBF;
  &:hover{
        color:white;
        background-color:#5C3FBF;
    }
`;

const LogoutButton = styled.button`
  padding: 0 20px;
  margin-left: 16px;
  width:90px;
  height: 32px;
  background: #FAF8FF;
  border-radius: 16px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.42px;
  color: #5C3FBF;
  &:hover{
        color:white;
        background-color:#5C3FBF;
    }
`;

const HomeButton = styled.button`
    background: none;
    border: none;
    &:hover{
      cursor: pointer;
    }
`;

const NavList = styled.ul`
  display:flex;
  margin-top:57px;
`;

const NavItem = styled(Link)`
  width:100px;
  height: 25px;
  line-height:25px;
  text-align:center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.42px;
  color: #5C3FBF;
  &:hover{
        color:white;
        background-color:#5C3FBF;
        /* transition: color 0.5s ease;
        transition: background-color 0.5s ease; */
    }
`;

function GoSignin() {
  console.log('go signup');
  window.location.assign('#/signup');
}

function GoLogin() {
  console.log('go login');
  window.location.assign('#/login');
}

function GoLogout() {
  console.log('go logout');
  window.location.replace('#/home');
}

function GoHome() {
  window.location.replace('#/Home');
}

const Header = () => (
  <HeaderBackground>
    <HomeButton onClick={GoHome}>
      <img alt="logo" src="img/logo.png" />
    </HomeButton>
    <SignInButton onClick={GoSignin}>
      회원가입
    </SignInButton>
    <LoginButton onClick={GoLogin}>
      로그인
    </LoginButton>
    <LogoutButton onClick={GoLogout}>
      로그아웃
    </LogoutButton>
    <NavList>
      <NavItem to="/events">전체</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=sushi' }}>수시행사</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=jungshi' }}>정시행사</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=fair' }}>대학박람회</NavItem>
      <NavItem to="/search">행사찾기</NavItem>
    </NavList>
  </HeaderBackground>
);

export default Header;
