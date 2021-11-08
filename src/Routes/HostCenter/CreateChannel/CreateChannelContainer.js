import { useHistory } from 'react-router';
import CreateChannelPresenter from './CreateChannelPresenter';

const user = {
  id: '원영',
  nickname: '원영',
};

function CreateChannelContainer() {
  const history = useHistory();

  return (
    <>
      {!user && history.push('/signup')}
      <CreateChannelPresenter user={user} />
    </>
  );
}

export default CreateChannelContainer;
