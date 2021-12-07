import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import EventInfoPresenter from './EventInfoPresenter';

function EventInfoContainer() {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const [myEventPost, setMyEventPost] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const loadEventInfo = useCallback(async () => {
    const { data } = await axios.post('http://localhost:3001/api/events/detail', {
      event_id: params.eventID,
    });
    setMyEventPost(data.data[0]);
  }, []);

  useEffect(() => {
    if (!loaded) {
      loadEventInfo().then(() => {
        setLoaded(true);
      });
    }
  }, [loadEventInfo, loaded]);

  return (
    <EventInfoPresenter
      myEventPost={myEventPost}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}

export default EventInfoContainer;
