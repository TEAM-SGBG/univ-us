import styled from 'styled-components';
import {
  Card, Col, Row, Avatar,
} from 'antd';
import { EyeOutlined, HeartOutlined, HeartTwoTone } from '@ant-design/icons';

const CardStyle = styled(Card)`
  width: 75em;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-self: center;
`;

function EventCard({ eventPost }) {
  return (
    <CardStyle
      cover={(
        <img
          alt="example"
          src="https://dummyimage.com/360x200/000/fff"
        />
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
          <Col span={8} style={{ textAlign: 'left' }}>{eventPost.title}</Col>
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
            {eventPost.liked ? <HeartTwoTone twoToneColor="#eb2f96" /> : <HeartOutlined />}
          </Col>
        </Row>
      </div>
    </CardStyle>
  );
}

export default EventCard;
