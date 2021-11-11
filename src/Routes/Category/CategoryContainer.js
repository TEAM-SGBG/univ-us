import { Avatar } from 'antd';
import { useLocation } from 'react-router-dom';
import { useCallback, useState } from 'react';
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
  const type = query.get('type');
  const [pageNumber, setPageNumber] = useState(1);

  const mappingType = useCallback(() => {
    if (type === 'sushi') return '수시행사';
    if (type === 'jungshi') return '정시행사';
    return '대학박람회';
  }, [type]);

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  const initializePageNumber = useCallback(() => { setPageNumber(1); }, []);

  return (
    <CategoryPresenter
      mainEvents={mainEvents}
      type={query.get('type')}
      mappingType={mappingType}
      onChangePageNumber={onChangePageNumber}
      pageNumber={pageNumber}
      initializePageNumber={initializePageNumber}
    />
  );
}

export default CategoryContainer;
