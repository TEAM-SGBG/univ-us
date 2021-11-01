import styled from 'styled-components';

const FooterBackground = styled.div`
  margin: 0 auto;
  padding: 20px 60px;
  width: 1200px;
  background-color: white;
  border-top: 3px solid whitesmoke;
`;

const FooterMain = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.56px;
  color: #5C3FBF;
`;

const FooterLetter = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.56px;
  color: #979797;
  margin-top: 4px;
`;

const FooterLast = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 19px;
  letter-spacing: 0.56px;
  color: #5C3FBF;

  margin-top: 4px;
`;

const Footer = () => (
  <FooterBackground>
    <FooterMain>유니버스</FooterMain>
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
