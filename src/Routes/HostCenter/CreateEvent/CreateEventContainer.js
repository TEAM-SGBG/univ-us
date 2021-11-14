import { useHistory } from 'react-router';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CreateEventPresenter from './CreateEventPresenter';

const user = {
  id: '원영',
  nickname: '원영',
};

const channel = {
  name: '건국대학교',
  id: 1,
  avatar: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
  url: 'http://localhost:3000/hostcenter/test/event',
  events: [
    {
      id: 1,
      title: '2022 건국대학교 정시 설명회 시작',
      avatar: <Avatar />,
      channel: {
        name: '건국대학교',
        subscribed: false,
      },
      view: 104,
      liked: false,
      date: new Date(),
    },
    {
      id: 2,
      title: '2022 건국대학교 수시 설명회',
      avatar: <Avatar />,
      channel: {
        name: '건국대학교',
        subscribed: false,
      },
      view: 15,
      liked: false,
      date: new Date(),
    },
  ],
};

const CreateEventContainer = () => {
  const history = useHistory();

  return (
    <>
      {(!user || !channel) && history.push('/signup')}
      <CreateEventPresenter user={user} channel={channel} />
    </>
  );
};

export default CreateEventContainer;
