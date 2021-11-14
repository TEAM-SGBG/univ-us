import { Avatar } from 'antd';
import { useLocation } from 'react-router-dom';
import CategoryPresenter from './CategoryPresenter';

const mainEvents = [
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
  {
    id: 3,
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
  {
    id: 4,
    title: '2022 건국대학교 정시 설명회',
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
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
    title: '2022 건국대학교 정시 설명회 끝',
    avatar: <Avatar />,
    channel: {
      name: '건국대학교',
      subscribed: false,
    },
    view: 104,
    liked: false,
    date: new Date(),
  },
];

function CategoryContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  return (
    <CategoryPresenter mainEvents={mainEvents} type={query.get('type')} />
  );
}

export default CategoryContainer;
