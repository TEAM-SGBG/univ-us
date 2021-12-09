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
  width: 380px;
  background-color: whitesmoke;
  color:#5C3FBF;
`;

const ReservedTh2 = styled.th`
  text-align:center;
  width: 380px;
  background-color: whitesmoke;
  color:#5C3FBF;
`;

const ReservedTh3 = styled.th`
  text-align:center;
  width: 380px;
  background-color: whitesmoke;
  color:#5C3FBF;
`;

const ReservedTr = styled.tr`
  text-align:center;
`;

const ReservedTd1 = styled.td`
  width: 380px;
  height:50px;
  line-height:50px;
`;
const ReservedTd2 = styled.td`
   width: 380px;
`;
const ReservedTd3 = styled.td`
   width: 380px;
`;

const LikedEvent = styled.div`
  margin:25px;
`;

const DeleteButton = styled.button`
  float:right;
`;

function AdminPresenter({
  myNum, goOne, goTwo, goThree, channels, events, users, deleteChannel, deleteEvent, deleteUser,
}) {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <MyPageH1>
          관리자 페이지
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
              <ReservedTh1>채널ID</ReservedTh1>
              <ReservedTh2>이름</ReservedTh2>
              <ReservedTh3>호스트ID</ReservedTh3>
            </ReservedTr>
            {channels.map((channel) => (
              <ReservedTr>
                <ReservedTd1>{channel.channel_id}</ReservedTd1>
                <ReservedTd2>{channel.channel_name}</ReservedTd2>
                <ReservedTd3>
                  {channel.host_id}
                  <DeleteButton type="button" onClick={deleteChannel}>삭제</DeleteButton>
                </ReservedTd3>
              </ReservedTr>
            ))}
          </ReservedTable>
        </ReservedEvent>
        )}
        {(myNum === '2') && (
          <LikedEvent>
            <ReservedTable>
              <ReservedTr>
                <ReservedTh1>행사ID</ReservedTh1>
                <ReservedTh2>행사이름</ReservedTh2>
                <ReservedTh3>카테고리</ReservedTh3>
              </ReservedTr>
              {events.map((event) => (
                <ReservedTr>
                  <ReservedTd1>{event.event_id}</ReservedTd1>
                  <ReservedTd2>{event.name}</ReservedTd2>
                  <ReservedTd3>
                    {event.category}
                    <DeleteButton type="button" onClick={deleteEvent}>삭제</DeleteButton>
                  </ReservedTd3>
                </ReservedTr>
              ))}
            </ReservedTable>
          </LikedEvent>
        )}
        {(myNum === '3') && (
          <LikedEvent>
            <ReservedTable>
              <ReservedTr>
                <ReservedTh1>회원ID</ReservedTh1>
                <ReservedTh2>생성일</ReservedTh2>
                <ReservedTh3>이메일</ReservedTh3>
              </ReservedTr>
              {users.map((user) => (
                <ReservedTr>
                  <ReservedTd1>{user.id_token}</ReservedTd1>
                  <ReservedTd2>{user.created_at}</ReservedTd2>
                  <ReservedTd3>
                    {user.email}
                    <DeleteButton type="button" onClick={deleteUser}>삭제</DeleteButton>
                  </ReservedTd3>
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
