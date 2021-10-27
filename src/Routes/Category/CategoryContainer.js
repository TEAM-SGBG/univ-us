import { Avatar } from 'antd';
import { useLocation } from 'react-router-dom';
import CategoryPresenter from './CategoryPresenter';

const mainEvents = [
  {
    id: 1,
    title: '2022 건국대학교 정시 설명회',
    avatar: <Avatar />,
    channelName: '건국대학교',
    price: 0,
    view: 104,
    liked: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: '2022 건국대학교 수시 설명회',
    avatar: <Avatar />,
    channelName: '건국대학교',
    price: 0,
    view: 15,
    liked: false,
    date: new Date().toLocaleDateString(),
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
