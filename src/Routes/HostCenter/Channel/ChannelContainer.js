import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelPresenter from './ChannelPresenter';
import { LOAD_MY_CHANNELS_REQUEST } from '../../../reducers/hostcenter';

function ChannelContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const { loadMyChannelsLoading, myChannels } = useSelector((state) => state.hostcenter);

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  const goChannelCreate = () => {
    history.push('/hostcenter/createchannel');
  };

  useEffect(() => {
    dispatch({
      type: LOAD_MY_CHANNELS_REQUEST,
    });
  }, []);

  return (
    <ChannelPresenter
      pageNumber={pageNumber}
      loadChannelLoading={loadMyChannelsLoading}
      mainChannels={myChannels}
      goChannelCreate={goChannelCreate}
      onChangePageNumber={onChangePageNumber}
    />
  );
}

export default ChannelContainer;
