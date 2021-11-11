import styled from 'styled-components';

const Footer = styled.div`
  margin-left: 60px;
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #5C3FBF;
  margin: 5px auto;
`;

const Content = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #979797;
  margin: 5px auto;
`;

const HostCenterFooter = () => (
  <Footer>
    <Title>유니버스</Title>
    <Content>(주)유니버스 | 사업자등록번호 123-45-67891 |</Content>
    <Content>대표 SGBG | 개인정보책임자 SGBG</Content>
  </Footer>
);

export default HostCenterFooter;
