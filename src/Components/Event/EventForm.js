import { Button, Popconfirm } from 'antd';
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import moment from 'moment';

const EventForm = ({ currentPost }) => {
  // setEventID(currentPost.event_id);
  const [subscribed, setSubscribed] = useState();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [event, setEvent] = useState();
  // console.log(currentPost);
  // setEvent(currentPost);

  useEffect(() => {
    // setEventID(event[0].event_id);
    if (currentPost.event_id) {
      axios.get(`https://univ-us-server.herokuapp.com/api/events/is_applied/${currentPost.event_id}`).then((res) => {
        if (res.data.success) {
          // console.log('success');
          setSubscribed(res.data.applied);
        } else {
          console.log(res.data.err);
        }
      });
    }
  }, [currentPost.event_id]);

  // const showPopConfirm = () => {
  //   setVisible(true);
  // };

  const onToggleDescribe = useCallback(() => {
    setSubscribed(((prevState) => {
      if (prevState === true) {
        axios.post('https://univ-us-server.herokuapp.com/api/events/cancel', { event_id: currentPost.event_id }).then((res) => {
          if (!res.data.success) {
            console.log(res.data.err);
            return prevState;
          }
          return !prevState;
        });
        // showPopConfirm();
        return !prevState;
      }
      // console.log(currentPost.event_id);
      axios.post('https://univ-us-server.herokuapp.com/api/events/apply', { event_id: currentPost.event_id }).then((res) => {
        if (!res.data.success) {
          console.log(res.data.err);
          return prevState;
        }
        return !prevState;
      });
      return !prevState;
    }));
  }, [currentPost.event_id]);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setSubscribed(false);
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
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
        {`일시: ${moment(currentPost.expired_at).add(1, 'days').format('YYYY. MM. DD')}`}
      </p>
      <p style={{ alignSelf: 'flex-start' }}>
        {`신청: ${moment(currentPost.created_at).format('YYYY. MM. DD')} - ${moment(currentPost.expired_at).format('YYYY. MM. DD')}`}
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
