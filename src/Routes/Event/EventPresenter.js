import Footer from 'Components/Footer';
import Header from 'Components/Header';
import styled from 'styled-components';
import { Divider, Row } from 'antd';
import { useCallback, useState } from 'react';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import EventForm from '../../Components/Event/EventForm';
import ChannelCard from '../../Components/Channel/ChannelCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  align-self: center;
`;

const EventTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  justify-self: flex-start;
  letter-spacing: 0.56px;
  padding-top: 24px;
  margin-bottom: 16px;
  align-self: flex-start;
`;

const EventDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.56px;
  color: #5C3FBF;
`;

function EventPresenter({ currentPost }) {
  const [liked, setLiked] = useState(currentPost.liked);

  const onToggleLike = useCallback(() => {
    setLiked(((prevState) => !prevState));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Wrapper>
        <EventTitle>
          {`${currentPost.title} `}
          {liked ? <HeartTwoTone onClick={onToggleLike} twoToneColor="#eb2f96" /> : <HeartOutlined onClick={onToggleLike} />}
        </EventTitle>
        <Row><img src="https://dummyimage.com/1100x400/000/fff" alt="example" style={{ width: '100%' }} /></Row>
        <Row style={{
          background: '#FAF8FF',
          paddingTop: '20px',
          width: '100%',
          height: '200px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
        }}
        >
          <EventDescription>{currentPost.description}</EventDescription>
        </Row>
        <Row style={{ alignSelf: 'flex-start' }}>
          <EventForm currentPost={currentPost} />
        </Row>
        <EventTitle>?????? ??????</EventTitle>
        <Divider style={{ borderTop: '3px solid rgba(0, 0, 0, 0.06)' }} />
        <ChannelCard currentChannel={currentPost.channel} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default EventPresenter;
