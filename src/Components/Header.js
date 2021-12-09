import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const HeaderBackground = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 20px 80px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
  div:first-of-type{
    flex-grow: 3;
  }

  div:last-of-type{
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1
  }
`;

const ButtonWrapper = styled.button`
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
    cursor: pointer;
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

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const history = useHistory();

  const GoAdmin = () => {
    console.log('go admin');
    history.push('/admin');
  };

  const GoHostCenter = () => {
    history.push('/hostcenter');
  };

  function GoSignin() {
    console.log('go signup');
    history.push('/signup');
  }

  function GoMypage() {
    console.log('go mypage');
    history.push('/mypage');
  }

  function GoLogin() {
    console.log('go login');
    history.push('/login');
  }

  function GoHome() {
    history.push('/home');
  }

  return (
    <HeaderBackground>
      <Wrapper>
        <div>
          <HomeButton onClick={GoHome}>
            <img alt="logo" src="/img/logo.png" />
          </HomeButton>
        </div>
        <div>
          <ButtonWrapper onClick={GoAdmin}>
            관리자
          </ButtonWrapper>
          <ButtonWrapper onClick={GoMypage}>
            MyPage
          </ButtonWrapper>
          <ButtonWrapper onClick={GoHostCenter}>
            호스트센터
          </ButtonWrapper>
          {!isLoggedIn && (
          <ButtonWrapper onClick={GoSignin}>
            회원가입
          </ButtonWrapper>
          )}
          {isLoggedIn ? (
            <ButtonWrapper>
              <a href="http://localhost:3001/auth/logout">
                로그아웃
              </a>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper onClick={GoLogin}>
              로그인
            </ButtonWrapper>
          )}
        </div>
      </Wrapper>
      <NavList>
        <NavItem to="/home">메인</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=all' }}>전체행사</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=sushi' }}>수시행사</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=jungshi' }}>정시행사</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=fair' }}>대학박람회</NavItem>
      </NavList>
    </HeaderBackground>
  );
};

export default Header;
