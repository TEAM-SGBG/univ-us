import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import CategoryPresenter from './CategoryPresenter';
// import eventPosts from '../../mock/HostCenterMock/eventPosts.json';

function CategoryContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const type = query.get('type');
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/events/category_event?category=${type}`).then((response) => {
      if (response.data.success) {
        console.log('all_event/success');
        console.log(response.data.data);
        setEvents(response.data.data);
      } else {
        setEvents(-1);
      }
    });
  }, [type]);

  const mappingType = useCallback(() => {
    if (type === 'sushi') return '수시행사';
    if (type === 'jungshi') return '정시행사';
    if (type === 'fair') return '대학박람회';
    return '전체';
  }, [type]);

  const onChangePageNumber = (v) => {
    setPageNumber(v);
  };

  const initializePageNumber = useCallback(() => { setPageNumber(1); }, []);

  useEffect(() => {
    initializePageNumber();
  }, [type]);

  return (
    <CategoryPresenter
      events={events}
      mappingType={mappingType}
      onChangePageNumber={onChangePageNumber}
      pageNumber={pageNumber}
      initializePageNumber={initializePageNumber}
    />
  );
}

export default CategoryContainer;
