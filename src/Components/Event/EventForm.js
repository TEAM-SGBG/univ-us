import { Button, Popconfirm } from 'antd';
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';

const EventForm = ({ currentPost }) => {
  const [subscribed, setSubscribed] = useState();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [event, setEvent] = useState();
  // const [eventID, setEventID] = useState(currentPost.event_id);
  console.log(currentPost);
  // setEvent(currentPost);

  useEffect(() => {
    // setEventID(event[0].event_id);
    axios.get(`http://localshot:3001/api/events/is_applied/${currentPost?.event_id}`).then((res) => {
      if (res.data.success) {
        setSubscribed(res.data.applied);
      } else {
        console.log(res.data.err);
      }
    });
  }, []);

  // const showPopConfirm = () => {
  //   setVisible(true);
  // };

  const onToggleDescribe = useCallback(() => {
    setSubscribed(((prevState) => {
      if (prevState === true) {
        axios.post('http://localshot:3001/api/events/cancel', { event_id: currentPost.event_id }).then((res) => {
          if (!res.data.success) {
            console.log(res.data.err);
            return !prevState;
          }
          return prevState;
        });
        // showPopConfirm();
        return prevState;
      }
      axios.post('http://localshot:3001/api/events/apply', { event_id: currentPost.event_id }).then((res) => {
        if (!res.data.success) {
          console.log(res.data.err);
          return prevState;
        }
        return !prevState;
      });
      return !prevState;
    }));
  }, []);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setSubscribed(false);
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '160px',
      width: '335px',
      marginTop: '60px',
    }}
    >
      <p style={{ alignSelf: 'flex-start' }}>
        {`일시: ${new Date(currentPost.created_at).toLocaleDateString()}`}
      </p>
      <p style={{ alignSelf: 'flex-start' }}>
        {`신청: ${new Date(currentPost.created_at).toLocaleDateString()} - ${new Date(currentPost.expired_at).toLocaleDateString()}`}
      </p>
      <p style={{ alignSelf: 'flex-start' }}>
        {`장소: ${currentPost.place || 'online'}`}
      </p>
      <Popconfirm
        title="정말 신청 취소하시겠습니까?"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <Button
          onClick={onToggleDescribe}
          style={{
            width: '100%',
            background: '#5C3FBF',
            borderRadius: '3px',
            height: '48px',
            color: 'white',
          }}
        >
          {subscribed ? '신청 완료' : '신청하기'}
        </Button>
      </Popconfirm>
    </div>
  );
};

export default EventForm;
