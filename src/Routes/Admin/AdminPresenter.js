// import MiniHeader from 'Components/MiniHeader';
import Footer from 'Components/Footer';
import MiniHeader from 'Components/MiniHeader';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding:60px;
  font-family: Roboto;
`;

const AdminH1 = styled.h1`
  font-size:22px;
  line-height:35px;
  display:block;
`;

const AdminList = styled.ul`
  display:flex;
  margin-top:25px;
`;

const AdminItem = styled.li`
  width:125px;
  height: 25px;
  line-height:25px;
  font-family: Roboto;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 0.42px;
  &:hover{
        color:#5C3FBF;
        cursor:pointer;
    }
`;

function AdminPresenter() {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <AdminH1>
          관리자
        </AdminH1>
        <AdminList>
          <AdminItem index="1">회원 관리</AdminItem>
          <AdminItem index="2">채널 관리</AdminItem>
        </AdminList>
      </Wrapper>
      <Footer />
    </>
  );
}

export default AdminPresenter;
