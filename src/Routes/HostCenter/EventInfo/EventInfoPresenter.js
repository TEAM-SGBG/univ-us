import styled from 'styled-components';
import {
  Button, Card, Space, Typography,
} from 'antd';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

const Wrapper = styled.div`
  padding: 20px 5px;
  align-self: center;
  width: 60vw;
`;

const EventInfoPresenter = ({ myEventPost }) => (
  <Wrapper>
    <div style={{ display: 'flex', gap: '10px' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1,
      }}
      >
        <Card>아바타</Card>
        <Card>
          <div>
            <Title>D-Day</Title>
          </div>
          <div>
            <Text>멋진 행사가 될 거예요!</Text>
          </div>
          <div />
        </Card>
      </div>
      <Card style={{ flexGrow: 5 }} title="제목">
        <div>
          <Text>일시 </Text>
          <Text>
            <Space>
              {new Date(myEventPost.startDate).toLocaleDateString()}
              -
              {new Date(myEventPost.endDate).toLocaleDateString()}
            </Space>
          </Text>
        </div>
        <div>
          <Text>장소 </Text>
          <Text>
            {myEventPost.place}
          </Text>
        </div>
        <div>
          <Text>링크 </Text>
          <Link to={`/events/${myEventPost.id}`}>이벤트 링크</Link>
        </div>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text style={{ alignSelf: 'center' }}>
        모집
      </Text>
      <Button type="text">참가자 리스트 확인</Button>
    </div>
    <div style={{ display: 'flex', gap: '10px' }}>
      <Card style={{ flexGrow: 3 }} title="참가신청"><Card.Meta title={`${myEventPost.applied}명`} /></Card>
      <Card style={{ flexGrow: 1 }} title="취소"><Card.Meta title={`${myEventPost.canceled}명`} /></Card>
    </div>
  </Wrapper>
);

export default EventInfoPresenter;
