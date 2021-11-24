import styled from 'styled-components';
import EventList from '../../../Components/Event/EventList';
import InsightCard from '../../../Components/HostCenter/InsightCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainSection = styled.div`
    
`;

const MenuWrapper = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  color: #333333;
`;

const MyEventPresenter = ({ eventPosts, pageNumber, onChangePageNumber }) => {
  const menu = [
    {
      name: '구독',
      unit: '명',
      number: 0,
    },
    {
      name: '모집 중',
      unit: '개의 행사',
      number: eventPosts.length,
    },
    {
      name: '종료',
      unit: '개의 행사',
      number: 0,
    },
  ];
  return (
    <Wrapper>
      <MenuWrapper>채널 인사이트</MenuWrapper>
      <TopSection>
        {menu.map(({ name, unit, number }) => (
          <InsightCard
            key={name}
            number={number}
            name={name}
            unit={unit}
          />
        ))}
      </TopSection>
      <MenuWrapper>채널 리스트</MenuWrapper>
      <MainSection>
        <EventList
          mainEvents={eventPosts}
          pageNumber={pageNumber}
          onChangePageNumber={onChangePageNumber}
          maxPageSize={3}
          likeDisabled
          isMyEvent
        />
      </MainSection>
    </Wrapper>
  );
};

export default MyEventPresenter;
