import Footer from 'Components/Footer';
import MiniHeader from 'Components/MiniHeader';
import styled from 'styled-components';
import { Skeleton, message } from 'antd';
import ChannelCard from '../../Components/Channel/ChannelCard';

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

const GouserButton = styled.button`
  border:none;
  background-color: white;
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

const SubChannel = styled.div`
  margin:25px;
`;

function MyPagePresenter({
  goUserinfo, myNum, goOne, goTwo, goThree, applied, liked, channel, loading, done, error,
}) {
  return (
    <>
      <MiniHeader />
      <Wrapper>
        <MyPageH1>
          마이페이지
        </MyPageH1>
        <MyPageList>
          <MyPageItem index="1" onClick={goOne}>신청한 행사</MyPageItem>
          <MyPageItem index="2" onClick={goTwo}>관심있는 행사</MyPageItem>
          <MyPageItem index="3" onClick={goThree}>구독중인 채널</MyPageItem>
          <MyPageItem>
            <GouserButton onClick={goUserinfo}>
              회원정보수정
            </GouserButton>
          </MyPageItem>
        </MyPageList>
        {(myNum === '1') && (
        <ReservedEvent>
          <ReservedTable>
            <ReservedTr>
              <ReservedTh1>신청일</ReservedTh1>
              <ReservedTh2>신청행사</ReservedTh2>
              <ReservedTh3>상세내용</ReservedTh3>
            </ReservedTr>
            {applied.map((event) => (
              <ReservedTr key={1}>
                <ReservedTd1>{event.id}</ReservedTd1>
                <ReservedTd2>{event.title}</ReservedTd2>
                <ReservedTd3>{event.channel.name}</ReservedTd3>
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
              {liked.map((event) => (
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
          () => {
            if (loading) {
              return <Skeleton />;
            }
            if (error) {
              return message.error('구독 채널 불러오기 실패');
            }
            if (done && channel.length === 0) {
              return <div>구독한 채널이 없습니다.</div>;
            }

            return (
              <SubChannel>
                {channel.map((subscribedChannel) => (
                  <ChannelCard
                    key={channel.id}
                    currentChannel={subscribedChannel}
                  />
                ))}
              </SubChannel>
            );
          }
        )()}
      </Wrapper>
      <Footer />
    </>
  );
}

export default MyPagePresenter;
