import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import EventInfoPresenter from './EventInfoPresenter';
import { LOAD_EVENT_PARTICIPANT_REQUEST } from '../../../reducers/hostcenter';

function EventInfoContainer() {
  const params = useParams();
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);
  const [myEventPost, setMyEventPost] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { eventParticipants } = useSelector((state) => state.hostcenter);

  const showModal = () => {
    dispatch({
      type: LOAD_EVENT_PARTICIPANT_REQUEST,
      data: {
        event_id: myEventPost.event_id,
      },
    });
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const loadEventInfo = useCallback(async () => {
    const { data } = await axios.post('https://univ-us-server.herokuapp.com/api/events/detail', {
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
      eventParticipants={eventParticipants}
    />
  );
}

export default EventInfoContainer;
