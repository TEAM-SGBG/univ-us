// eslint-disable-next-line import/no-unresolved
import Footer from 'Components/Footer'; import Header from 'Components/Header'; import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

function MyPagePresenter() {
  return (
    <>
      <Header />
      <Wrapper>
        MyPage
      </Wrapper>
      <Footer />
    </>
  );
}

export default MyPagePresenter;
