import { Divider, message } from 'antd';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import EventList from '../../Components/Event/EventList';

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
  pageNumber, mappingType, onChangePageNumber, events, loading, done, error,
}) {
  return (
    <>
      <Header />
      <Wrapper>
        <EventTitle>{mappingType()}</EventTitle>
        <DividerWrapper />
        {loading && <LoadingOutlined />}
        {done && (
        <EventList
          mainEvents={events}
          pageNumber={pageNumber}
          onChangePageNumber={onChangePageNumber}
          maxPageSize={5}
        />
        )}
        {error && message.error('행사 정보를 가져오는데 실패했습니다.')}
      </Wrapper>
      <Footer />
    </>
  );
}

export default CategoryPresenter;
