import styled from 'styled-components';
import { useHistory } from 'react-router';

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

const MiniHeader = () => {
  const history = useHistory();

  function GoHome() {
    history.push('/home');
  }

  return (
    <HeaderBackground>
      <HomeButton onClick={GoHome}>
        <MiniHeaderImg alt="logo" src="img/mainlogo.png" />
      </HomeButton>
    </HeaderBackground>
  );
};
export default MiniHeader;
