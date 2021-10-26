import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const FooterBackground = styled.div`
  margin: 0 auto;
  padding: 60px;
  padding-top:75px;
  padding-bottom:0px;
  height: 450px;
  width: 1200px;
  background-color: white;
  border-top:3px solid whitesmoke;
  border-bottom:3px solid whitesmoke;
`;

const FooterMain = styled.div`
    width:100%;
    height: 50px;
    line-height:50px;
    margin-top:100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 0.42px;
    color: #5C3FBF;
`;

const FooterLetter = styled.div`
    width:100%;
    margin-top:20px;
    line-height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    letter-spacing: 0.42px;
    color: gray;
`;

const FooterLast = styled.div`
    width:100%;
    line-height: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.42px;
    color: #5C3FBF;
`;

const Footer = () => (
  <FooterBackground>
    <img alt="logo" src="img/logo.png" />
    <FooterMain>Univ-us</FooterMain>
    <FooterLetter>
      (주)유니버스    |사업자등록번호 123-456-7890    | 통신판매업 신고번호 제 2021-서울광진-1234호
      <br />
      대표 SGBG   |개인정보책임자 SGBG   |서울특별시 광진구 능동로 31 건국대학교 공과대학 컴퓨터공학부 17학번
    </FooterLetter>
    <FooterLast>
      유니버스는 통신판매중개업자이며 행사에 대한 당사자 및 주최자가 아닙니다. 따라서 유니버스는 등록된 행사에 대해 책임지지 않습니다.
    </FooterLast>
  </FooterBackground>
);

export default Footer;
