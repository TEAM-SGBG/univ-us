import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const FooterBackground = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  width: 1200px;
  height:100px;
  background-color: white;
  border-top: 3px solid whitesmoke;
`;

const MiniHeaderImg = styled.img`
    display:block;
    margin: 0 auto;
`;

const FooterLetter = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  text-align:center;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.56px;
  color: #979797;
  margin-top: 10px;
`;

const MiniFooter = () => (
  <FooterBackground>
    <MiniHeaderImg alt="logo" src="img/logo.png" />
    <FooterLetter>
      univ-us
    </FooterLetter>
  </FooterBackground>
);

export default MiniFooter;
