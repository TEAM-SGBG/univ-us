import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBackground = styled.div`
  margin: 0 auto;
  padding: 30px 60px;
  padding-bottom:0px;
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
`;

const LoginButton = styled.button`
  padding: 0 20px;
  margin-left: 16px;
  width:90px;
  height: 32px;
  background: #FAF8FF;
  border-radius: 16px;
  border: none;
`;

const LogoutButton = styled.button`
  padding: 0 20px;
  margin-left: 16px;
  width:90px;
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

const Header = () => (
  <HeaderBackground>
    <img alt="logo" src="img/logo.png" />
    <SignInButton>
      <ButtonText>회원가입</ButtonText>
    </SignInButton>
    <LoginButton>
      <ButtonText>로그인</ButtonText>
    </LoginButton>
    <LogoutButton>
      <ButtonText>로그아웃</ButtonText>
    </LogoutButton>
    <NavList>
      <NavItem to="/events">전체</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=sushi' }}>수시행사</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=jungshi' }}>정시행사</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=fair' }}>대학박람회</NavItem>
      <NavItem to="/search">대학찾기</NavItem>
    </NavList>
  </HeaderBackground>
);

export default Header;
