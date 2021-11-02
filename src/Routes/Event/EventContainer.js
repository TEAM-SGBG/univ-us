import { Avatar } from 'antd';
import EventPresenter from './EventPresenter';

const currentPost = {
  id: 7,
  title: '2022 건국대학교 정시 설명회',
  avatar: <Avatar />,
  channel: {
    name: '건국대학교',
    subscribed: false,
  },
  price: 0,
  view: 104,
  liked: false,
  date: new Date(),
  description: '창조와 도전으로 걸어온 건국의 역사\n대학에서 세계의 중심으로',
  startDate: new Date(),
  endDate: new Date(),
  place: 'online',
};

function EventContainer() {
  return (
    <EventPresenter currentPost={currentPost} />
  );
}

export default EventContainer;