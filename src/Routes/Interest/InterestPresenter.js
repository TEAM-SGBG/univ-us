import Footer from 'Components/Footer';
import Header from 'Components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

function InterestPresenter() {
  return (
    <>
      <Header />
      <Wrapper>
        Interest
      </Wrapper>
      <Footer />
    </>
  );
}

export default InterestPresenter;
