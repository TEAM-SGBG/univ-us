// eslint-disable-next-line import/no-unresolved
import Footer from 'Components/Footer'; import Header from 'Components/Header'; import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

function InterestPresenter() {
  return (
    <Wrapper>
      <Header />
      Interest
      <Footer />
    </Wrapper>
  );
}

export default InterestPresenter;
