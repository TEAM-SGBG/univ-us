import { Avatar } from 'antd';
import { useLocation } from 'react-router';
import HomePresenter from './HomePresenter';

const RecommendationEvents = [
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
  {
    id: 3,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
  {
    id: 4,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
];

const PopularEvents = [
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
  {
    id: 3,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
  {
    id: 4,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
];

const NewEvents = [
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
  {
    id: 3,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
  {
    id: 4,
    title: '2022 건국대학교 정시 입시설명회',
    avatar: <Avatar />,
    date: new Date(),
  },
];

const PopularChannel = [
  {
    id: 1,
    title: '건국대학교',
    events: 2,
  },
  {
    id: 2,
    title: '건국대학교',
    events: 2,
  },
  {
    id: 3,
    title: '건국대학교',
    events: 2,
  },
  {
    id: 4,
    title: '건국대학교',
    events: 2,
  },
  {
    id: 5,
    title: '건국대학교',
    events: 2,
  },
  {
    id: 6,
    title: '건국대학교',
    events: 2,
  },
];

function HomeContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  return (
    <HomePresenter
      RecommendationEvents={RecommendationEvents}
      PopularEvents={PopularEvents}
      NewEvents={NewEvents}
      PopularChannel={PopularChannel}
      type={query.get('type')}
    />
  );
}

export default HomeContainer;
