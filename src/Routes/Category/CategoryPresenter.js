import { Pagination } from 'antd';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
  const [pageNumber, setPageNumber] = useState(1);

  const mappingType = useCallback(() => {
    if (type === 'sushi') return '수시행사';
    if (type === 'jungshi') return '정시행사';
    return '대학박람회';
  }, [type]);

  const onChangePageNumber = (v) => {
    setPageNumber(v);
    console.log(`start: ${(pageNumber - 1) * 5}`);
    console.log(`end: ${Math.min(mainEvents.length, pageNumber * 5)}`);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <EventTitle>{mappingType()}</EventTitle>
        {mainEvents
          .slice((pageNumber - 1) * 5, Math.min(mainEvents.length, pageNumber * 5))
          .map((event) => <EventCard key={event.id} eventPost={event} />)}
        <Pagination
          style={{ textAlign: 'center', marginBottom: '20px' }}
          total={mainEvents.length}
          onChange={onChangePageNumber}
          defaultPageSize={5}
        />
      </Wrapper>
      <Footer />
    </>
  );
}

export default CategoryPresenter;
