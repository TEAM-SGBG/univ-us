import { Divider } from 'antd';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import EventList from '../../Components/Event/EventList';
// import eventPosts from '../../mock/HostCenterMock/eventPosts.json';

const EventTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #5C3FBF;
  text-decoration: underline;
  justify-self: flex-start;
  letter-spacing: 0.56px;
  padding-top: 64px;
  max-width: 1100px;

  @media screen and (min-width: 0px) {
    width: 360px;
    display: block;
  }

  @media screen and (min-width: 425px) {
    width: 360px;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1196px) {
    width: 1100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DividerWrapper = styled(Divider)`
  width: 1100px;
  min-width: auto;

  @media screen and (min-width: 0px) {
    width: 360px;
    display: block;
  }

  @media screen and (min-width: 425px) {
    width: 360px;
    min-width: auto;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    min-width: auto;
  }

  @media screen and (min-width: 1196px) {
    width: 1100px;
    min-width: auto;
  }
`;

function CategoryPresenter({
  pageNumber, mappingType, onChangePageNumber, events,
}) {
  return (
    <>
      <Header />
      <Wrapper>
        <EventTitle>{mappingType()}</EventTitle>
        <DividerWrapper />
        <EventList
          events={events}
          pageNumber={pageNumber}
          onChangePageNumber={onChangePageNumber}
          maxPageSize={5}
        />
      </Wrapper>
      <Footer />
    </>
  );
}

export default CategoryPresenter;
