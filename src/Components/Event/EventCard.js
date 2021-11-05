import styled from 'styled-components';
import {
  Card, Col, Row, Avatar,
} from 'antd';
import { EyeOutlined, HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { useState, useCallback } from 'react';

const CardStyle = styled(Card)`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-self: center;
  max-width: 1100px;

  @media screen and (min-width: 425px) {
    width: 360px;
    display: block;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    display: flex;
  }
  
  @media screen and (min-width: 1196px) {
    width: 1100px;
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

function EventCard({ eventPost }) {
  const [liked, setLiked] = useState(eventPost.liked);

  const onToggleLike = useCallback(() => {
    setLiked(((prevState) => !prevState));
  }, []);

  return (
    <CardStyle
      cover={(
        <a
          href={`/events/${eventPost.id}`}
          rel="noreferrer"
        >
          <img
            alt="example"
            src="https://dummyimage.com/360x200/000/fff"
          />
        </a>
)}
      bodyStyle={{ width: '100%' }}
    >
      <Wrapper>
        <Row align="middle">
          <Col span={12} style={{ textAlign: 'left' }}>
            {eventPost.date.toLocaleDateString()}
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            price:
            {eventPost.price}
          </Col>
        </Row>
        <Row align="middle">
          <Col span={24} style={{ textAlign: 'left' }}>
            <a
              href={`/events/${eventPost.id}`}
              rel="noreferrer"
            >
              {eventPost.title}
            </a>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={12} style={{ textAlign: 'left' }}>
            <Avatar src={eventPost.avatar} />
            {' '}
            {eventPost.channel.name}
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <EyeOutlined />
            {eventPost.view}
            {' '}
            {liked ? <HeartTwoTone onClick={onToggleLike} twoToneColor="#eb2f96" /> : <HeartOutlined onClick={onToggleLike} />}
          </Col>
        </Row>
      </Wrapper>
    </CardStyle>
  );
}

export default EventCard;
