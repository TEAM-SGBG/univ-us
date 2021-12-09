import { Button, Popconfirm } from 'antd';
import { useCallback, useState } from 'react';

const EventForm = ({ currentPost }) => {
  const [subscribed, setSubscribed] = useState();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopConfirm = () => {
    setVisible(true);
  };

  const onToggleDescribe = useCallback(() => {
    setSubscribed(((prevState) => {
      if (prevState === true) {
        showPopConfirm();
        return prevState;
      }
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
          {subscribed ? '신청됨' : '신청'}
        </Button>
      </Popconfirm>
    </div>
  );
};

export default EventForm;
