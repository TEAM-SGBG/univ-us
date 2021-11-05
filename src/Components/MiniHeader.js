import styled from 'styled-components';

const HeaderBackground = styled.div`
  margin: 0 auto;
  padding-left:60px;
  padding-top: 30px;
  height: 75px;
  width: 1200px;
  background-color: white;
`;

const MiniHeaderImg = styled.img`
    display:block;
    float:left;
`;

const HomeButton = styled.button`
    background: none;
    border: none;
    &:hover{
      cursor: pointer;
    }
`;

function GoHome() {
  window.location.replace('#/home');
}

const MiniHeader = () => (
  <HeaderBackground>
    <HomeButton onClick={GoHome}>
      <MiniHeaderImg alt="logo" src="img/logo.png" />
    </HomeButton>
  </HeaderBackground>
);

export default MiniHeader;
