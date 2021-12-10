import { Button, Popconfirm } from 'antd';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.56px;
  color: #8D8D8D;
`;

const ChannelName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #000000;
  align-self: center;
`;

const ChannelCard = ({ currentChannel, isSubscribed }) => {
  const [subscribed, setSubscribed] = useState();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { me } = useSelector((state) => state.user);

  const showPopConfirm = () => {
    setVisible(true);
  };

  const onToggleDescribe = useCallback(() => {
    setSubscribed(((prevState) => {
      if (prevState === true) {
        showPopConfirm();
        return prevState;
      }
      axios.post('https://univ-us-server.herokuapp.com/api/channel/subscribe', {
        channel_id: currentChannel.channel_id,
      }).then((response) => {
        if (response.data.success) {
          setSubscribed(true);
        }
      });
    }));
  }, [currentChannel]);

  const handleOk = () => {
    setConfirmLoading(true);
    axios.delete(`https://univ-us-server.herokuapp.com/api/channel/subscribe/${currentChannel.channel_id}`)
      .then((response) => {
        if (response.data.success) {
          setSubscribed(false);
        }
        setVisible(false);
        setConfirmLoading(false);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (currentChannel.subscriber_list) {
      // 구독 정보 요청
      setSubscribed(!!currentChannel.subscriber_list.find((subscriber) => subscriber.email === me.email));
    }
  }, [currentChannel]);

  useEffect(() => {
    if (isSubscribed) {
      setSubscribed(true);
    }
  }, []);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', alignSelf: 'flex-start', marginBottom: '10px',
    }}
    >
      <img src="/img/channel_avatar.png" alt="channelAvatar" width="75px" />
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
        <div style={{ display: 'flex', paddingBottom: '10px' }}>
          <ChannelName>
            {currentChannel?.channel_name}
            님의 채널
          </ChannelName>
          <Popconfirm
            title="정말 구독 취소하시겠습니까?"
            visible={visible}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
          >
            <Button
              onClick={onToggleDescribe}
              style={{ color: '#8D71DD', border: '1px solid #8D71DD', marginLeft: '5px' }}
            >
              {subscribed ? '구독 중' : '+ 구독'}
            </Button>
          </Popconfirm>
        </div>
        <Description>채널을 구독하고 최신 행사 소식을 가장 빠르게 받아보세요!</Description>
      </div>
    </div>
  );
};

export default ChannelCard;
