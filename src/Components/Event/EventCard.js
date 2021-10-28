import styled from 'styled-components';
import {
  Card, Col, Row, Avatar,
} from 'antd';
import { EyeOutlined, HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { useState, useCallback } from 'react';

const CardStyle = styled(Card)`
  width: 75em;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-self: center;
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
          href={`#/events/${eventPost.id}`}
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
      }}
      >
        <Row align="middle">
          <Col span={4} style={{ textAlign: 'left' }}>
            {eventPost.date}
          </Col>
          <Col span={4} offset={16}>
            price:
            {eventPost.price}
          </Col>
        </Row>
        <Row align="middle">
          <Col span={24} style={{ textAlign: 'left' }}>
            <a
              href={`#/events/${eventPost.id}`}
              rel="noreferrer"
            >
              {eventPost.title}
            </a>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={4} style={{ textAlign: 'left' }}>
            <Avatar src={eventPost.avatar} />
            {' '}
            {eventPost.channelName}
          </Col>
          <Col span={4} offset={16}>
            <EyeOutlined />
            {eventPost.view}
            {' '}
            {liked ? <HeartTwoTone onClick={onToggleLike} twoToneColor="#eb2f96" /> : <HeartOutlined onClick={onToggleLike} />}
          </Col>
        </Row>
      </div>
    </CardStyle>
  );
}

export default EventCard;
