import Footer from 'Components/Footer';
import MiniHeader from 'Components/MiniHeader';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

function MyPagePresenter({ goUserinfo }) {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <button type="button" onClick={goUserinfo}>
          내 정보
        </button>
      </Wrapper>
      <Footer />
    </>
  );
}

export default MyPagePresenter;
