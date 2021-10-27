import { Pagination } from 'antd';
import styled from 'styled-components';
import { useCallback } from 'react';
import EventCard from '../../Components/Event/EventCard';

const EventTitle = styled.p`
  width: 70em;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #5C3FBF;
  justify-self: flex-start;
  letter-spacing: 0.56px;
  padding-top: 64px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function CategoryPresenter({ mainEvents, type }) {
  const mappingType = useCallback(() => {
    if (type === 'sushi') return '수시행사';
    if (type === 'jungshi') return '정시행사';
    return '대학박람회';
  }, [type]);

  return (
    <Wrapper>
      <EventTitle>{mappingType()}</EventTitle>
      {mainEvents.map((event) => <EventCard key={event.id} eventPost={event} />)}
      <Pagination style={{ textAlign: 'center' }} />
    </Wrapper>
  );
}

export default CategoryPresenter;
