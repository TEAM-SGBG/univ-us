import Footer from 'Components/Footer';
import Header from 'Components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
`;

function UserInfoPresenter() {
  return (
    <>
      <Header />
      <Wrapper>
        UserInfo
      </Wrapper>
      <Footer />
    </>
  );
}

export default UserInfoPresenter;
