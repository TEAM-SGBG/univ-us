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

const MiniHeader = () => (
  <HeaderBackground>
    <MiniHeaderImg alt="logo" src="img/logo.png" />
  </HeaderBackground>
);

export default MiniHeader;
