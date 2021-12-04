import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MyEventPresenter from './MyEventPresenter';
import eventPosts from '../../../mock/HostCenterMock/eventPosts.json';
import { LOAD_MY_EVENTS_REQUEST } from '../../../reducers/hostcenter';

const MyEventContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  // todo: params(channelID)로 해당 채널의 행사 데이터 요청

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  useEffect(() => {
    dispatch({
      type: LOAD_MY_EVENTS_REQUEST,
    });
  }, [params.channelID]);

  return (
    <MyEventPresenter
      eventPosts={eventPosts}
      pageNumber={pageNumber}
      onChangePageNumber={onChangePageNumber}
    />
  );
};

export default MyEventContainer;
