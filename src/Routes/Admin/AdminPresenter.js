import Footer from 'Components/Footer';
import MiniHeader from 'Components/MiniHeader';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width:1200px;
  padding:60px;
  font-family: Roboto;
`;

const MyPageH1 = styled.h1`
  font-size:22px;
  line-height:35px;
  display:block;
  /* margin-bottom:60px; */
`;

const MyPageList = styled.ul`
  display:flex;
  margin-top:25px;
`;

const MyPageItem = styled.li`
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

const ReservedEvent = styled.div`
  margin:25px;
`;

const ReservedTable = styled.table`
  border:none;
`;

const ReservedTh1 = styled.th`
  text-align:center;
  width: 150px;
  background-color: whitesmoke;
  color:#5C3FBF;
`;

const ReservedTh2 = styled.th`
  text-align:center;
  width: 300px;
  background-color: whitesmoke;
  color:#5C3FBF;
`;

const ReservedTh3 = styled.th`
  text-align:center;
  width: 700px;
  background-color: whitesmoke;
  color:#5C3FBF;
`;

const ReservedTr = styled.tr`
  text-align:center;
`;

const ReservedTd1 = styled.td`
  width: 150px;
  height:50px;
  line-height:50px;
`;
const ReservedTd2 = styled.td`
   width: 300px;
`;
const ReservedTd3 = styled.td`
   width: 700px;
`;

const LikedEvent = styled.div`
  margin:25px;
`;

function AdminPresenter({
  myNum, goOne, goTwo, goThree, channels, events, users,
}) {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <MyPageH1>
          마이페이지
        </MyPageH1>
        <MyPageList>
          <MyPageItem index="1" onClick={goOne}>채널 관리</MyPageItem>
          <MyPageItem index="2" onClick={goTwo}>행사 삭제</MyPageItem>
          <MyPageItem index="3" onClick={goThree}>회원 삭제</MyPageItem>
        </MyPageList>
        {(myNum === '1') && (
        <ReservedEvent>
          <ReservedTable>
            <ReservedTr>
              <ReservedTh1>신청일</ReservedTh1>
              <ReservedTh2>신청행사</ReservedTh2>
              <ReservedTh3>상세내용</ReservedTh3>
            </ReservedTr>
            {channels.map((channel) => (
              <ReservedTr key={1}>
                <ReservedTd1>{channel.id}</ReservedTd1>
                <ReservedTd2>{channel.title}</ReservedTd2>
                <ReservedTd3>{channel.name}</ReservedTd3>
              </ReservedTr>
            ))}
          </ReservedTable>
        </ReservedEvent>
        )}
        {(myNum === '2') && (
          <LikedEvent>
            <ReservedTable>
              <ReservedTr>
                <ReservedTh1>신청일</ReservedTh1>
                <ReservedTh2>신청행사</ReservedTh2>
                <ReservedTh3>상세내용</ReservedTh3>
              </ReservedTr>
              {events.map((event) => (
                <ReservedTr key={1}>
                  <ReservedTd1>{event.id}</ReservedTd1>
                  <ReservedTd2>{event.title}</ReservedTd2>
                  <ReservedTd3>{event.date}</ReservedTd3>
                </ReservedTr>
              ))}
            </ReservedTable>
          </LikedEvent>
        )}
        {(myNum === '3') && (
          <LikedEvent>
            <ReservedTable>
              <ReservedTr>
                <ReservedTh1>신청일</ReservedTh1>
                <ReservedTh2>신청행사</ReservedTh2>
                <ReservedTh3>상세내용</ReservedTh3>
              </ReservedTr>
              {users.map((user) => (
                <ReservedTr key={1}>
                  <ReservedTd1>{user.id}</ReservedTd1>
                  <ReservedTd2>{user.title}</ReservedTd2>
                  <ReservedTd3>{user.date}</ReservedTd3>
                </ReservedTr>
              ))}
            </ReservedTable>
          </LikedEvent>
        )}
      </Wrapper>
      <Footer />
    </>
  );
}

export default AdminPresenter;
