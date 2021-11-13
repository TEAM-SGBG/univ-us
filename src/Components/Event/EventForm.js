import { Button } from 'antd';

const EventForm = ({ currentPost }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '160px',
    width: '335px',
    marginTop: '60px',
  }}
  >
    <p style={{ alignSelf: 'flex-start' }}>{`일시: ${new Date(currentPost.date).toLocaleDateString()}`}</p>
    <p style={{ alignSelf: 'flex-start' }}>{`신청: ${new Date(currentPost.startDate).toLocaleDateString()} - ${new Date(currentPost.endDate).toLocaleDateString()}`}</p>
    <p style={{ alignSelf: 'flex-start' }}>{`장소: ${currentPost.place}`}</p>
    <Button style={{
      width: '100%',
      background: '#5C3FBF',
      borderRadius: '3px',
      height: '48px',
      color: 'white',
    }}
    >
      참가 신청
    </Button>
  </div>
);

export default EventForm;
