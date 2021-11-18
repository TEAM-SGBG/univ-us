import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelPresenter from './ChannelPresenter';
import user from '../../../mock/user.json';
import { LOAD_CHANNELS_REQUEST } from '../../../reducers/channel';

function ChannelContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const { loadChannelLoading, mainChannels } = useSelector((state) => state.channel);

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  const goChannelCreate = () => {
    history.push('/hostcenter/createchannel');
  };

  useEffect(() => {
    dispatch({
      type: LOAD_CHANNELS_REQUEST,
      owner_id: user.id,
    });
  }, []);

  return (
    <ChannelPresenter
      pageNumber={pageNumber}
      loadChannelLoading={loadChannelLoading}
      mainChannels={mainChannels}
      goChannelCreate={goChannelCreate}
      onChangePageNumber={onChangePageNumber}
    />
  );
}

export default ChannelContainer;
