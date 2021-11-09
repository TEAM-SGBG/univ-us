import { useHistory } from 'react-router';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ChannelPresenter from './ChannelPresenter';

const user = {
  id: '원영',
  nickname: '원영',
  channel: [{
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
  },
  {
    name: '원영2 채널',
    id: 2,
    avatar: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    url: 'http://localhost:3000/hostcenter/test/event',
    events: [
      {
        id: 1,
        title: 'ㅁㄴㅇㅁ아ㅓㅁㄴㅇ',
        avatar: <Avatar />,
        channel: {
          name: '원영2 채널',
          subscribed: false,
        },
        view: 999,
        liked: false,
        date: new Date(),
      },
    ],
  },
  {
    name: '원영3 채널',
    id: 3,
    avatar: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    url: 'http://localhost:3000/hostcenter/test/event',
  },
  {
    name: '원영4 채널',
    id: 4,
    avatar: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    url: 'http://localhost:3000/hostcenter/test/event',
  },
  ],
};

function ChannelContainer() {
  const history = useHistory();

  return (
    <>
      {!user && history.push('/signup')}
      <ChannelPresenter user={user} />
    </>
  );
}

export default ChannelContainer;
