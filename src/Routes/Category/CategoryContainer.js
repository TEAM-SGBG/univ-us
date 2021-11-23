import { useLocation, useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import CategoryPresenter from './CategoryPresenter';
import eventPosts from '../../mock/HostCenterMock/eventPosts.json';

function CategoryContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const history = useHistory();
  const query = useQuery();
  const type = query.get('type');
  const [pageNumber, setPageNumber] = useState(1);

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

  const goEventPage = useCallback((id) => () => {
    history.push(`/events/${id}`);
  }, []);

  useEffect(() => {
    initializePageNumber();
  }, [type]);

  return (
    <CategoryPresenter
      mainEvents={eventPosts}
      mappingType={mappingType}
      onChangePageNumber={onChangePageNumber}
      pageNumber={pageNumber}
      initializePageNumber={initializePageNumber}
      goEventPage={goEventPage}
    />
  );
}

export default CategoryContainer;
