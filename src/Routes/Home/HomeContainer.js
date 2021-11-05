import { Avatar } from 'antd';
import { useLocation } from 'react-router';
import HomePresenter from './HomePresenter';

const RecomendationEvents = [
  {
    id: 1,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
  {
    id: 2,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
];

function HomeContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  return (
    <HomePresenter RecomendationEvents={RecomendationEvents} type={query.get('type')} />
  );
}

export default HomeContainer;
