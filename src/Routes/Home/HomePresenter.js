// eslint-disable-next-line import/no-unresolved
import Footer from 'Components/Footer'; import Header from 'Components/Header'; import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

function HomePresenter() {
  return (
    <Wrapper>
      <Header />
      컨텐츠 채워넣기 ㅇㅅㅇ
      <Footer />
    </Wrapper>
  );
}

export default HomePresenter;
