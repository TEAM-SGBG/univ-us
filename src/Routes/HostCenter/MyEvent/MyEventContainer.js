import { useParams } from 'react-router-dom';
import { useState } from 'react';
import MyEventPresenter from './MyEventPresenter';
import eventPosts from '../../../mock/HostCenterMock/eventPosts.json';

const MyEventContainer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // todo: params(channelID)로 해당 채널의 행사 데이터 요청
  // eslint-disable-next-line no-unused-vars
  const params = useParams();

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  return (
    <MyEventPresenter
      eventPosts={eventPosts}
      pageNumber={pageNumber}
      onChangePageNumber={onChangePageNumber}
    />
  );
};

export default MyEventContainer;
