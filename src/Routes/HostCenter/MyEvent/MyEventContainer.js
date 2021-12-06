import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyEventPresenter from './MyEventPresenter';
// import eventPosts from '../../../mock/HostCenterMock/eventPosts.json';
import { LOAD_MY_EVENTS_REQUEST } from '../../../reducers/hostcenter';

const MyEventContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const { myEvents, loadMyEventsLoading } = useSelector((state) => state.hostcenter);

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  useEffect(() => {
    dispatch({
      type: LOAD_MY_EVENTS_REQUEST,
      data: {
        channel_id: params.channelID,
      },
    });
  }, [params.channelID]);

  return (
    <MyEventPresenter
      eventPosts={myEvents}
      pageNumber={pageNumber}
      onChangePageNumber={onChangePageNumber}
      loading={loadMyEventsLoading}
    />
  );
};

export default MyEventContainer;
