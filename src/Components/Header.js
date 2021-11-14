import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

const HeaderBackground = styled.div`
  margin: 0 auto;
  padding: 30px 60px;
  padding-bottom: 0px;
  margin-bottom: 20px;
  height: 162px;
  width: 1200px;
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

function GoSignin() {
  console.log('go signup');
  window.location.assign('/signup');
}

function GoMypage() {
  console.log('go mypage');
  window.location.assign('/mypage');
}

async function GoLogin() {
  console.log('go login');
  window.location.assign('/login');
}

function GoHome() {
  window.location.replace('/home');
}

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.index.user);
  const history = useHistory();

  const GoLogout = useCallback(() => {
    console.log('go logout');
    alert('로그아웃되었습니다.');

    window.location.replace('/home');
  }, []);

  const GoHostCenter = () => {
    history.push('/hostcenter');
  };

<<<<<<< HEAD
const Header = () => (
  <HeaderBackground>
    <Wrapper>
      <div>
        <HomeButton onClick={GoHome}>
          <img alt="logo" src="/img/logo.png" />
        </HomeButton>
      </div>
      <div>
        <ButtonWrapper onClick={GoMypage}>
          MyPage
        </ButtonWrapper>
        <ButtonWrapper onClick={GoHostCenter}>
          호스트센터
        </ButtonWrapper>
        <ButtonWrapper onClick={GoSignin}>
          회원가입
        </ButtonWrapper>
        <ButtonWrapper onClick={GoLogin}>
          로그인
        </ButtonWrapper>
        <ButtonWrapper onClick={GoLogout}>
          로그아웃
        </ButtonWrapper>
      </div>
    </Wrapper>
    <NavList>
      <NavItem to="/events">전체</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=sushi' }}>수시행사</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=jungshi' }}>정시행사</NavItem>
      <NavItem to={{ pathname: '/category', search: '?type=fair' }}>대학박람회</NavItem>
      <NavItem to="/home">행사찾기</NavItem>
    </NavList>
  </HeaderBackground>
);
=======
  return (
    <HeaderBackground>
      <Wrapper>
        <div>
          <HomeButton onClick={GoHome}>
            <img alt="logo" src="/img/logo.png" />
          </HomeButton>
        </div>
        <div>
          <ButtonWrapper onClick={GoMypage}>
            MyPage
          </ButtonWrapper>
          <ButtonWrapper onClick={GoHostCenter}>
            호스트센터
          </ButtonWrapper>
          <ButtonWrapper onClick={GoSignin}>
            회원가입
          </ButtonWrapper>
          {isLoggedIn ? (
            <ButtonWrapper onClick={GoLogout}>
              로그아웃
            </ButtonWrapper>
          ) : (
            <ButtonWrapper onClick={GoLogin}>
              로그인
            </ButtonWrapper>
          )}
        </div>
      </Wrapper>
      <NavList>
        <NavItem to={{ pathname: '/category', search: '?type=all' }}>전체</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=sushi' }}>수시행사</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=jungshi' }}>정시행사</NavItem>
        <NavItem to={{ pathname: '/category', search: '?type=fair' }}>대학박람회</NavItem>
        <NavItem to="/search">행사찾기</NavItem>
      </NavList>
    </HeaderBackground>
  );
};
>>>>>>> fca577177b2b54b4f86c38eb8fa79f7450eeacd2

export default Header;
