import { useLocation } from 'react-router-dom';
import { useCallback, useState } from 'react';
import CategoryPresenter from './CategoryPresenter';
import eventPosts from '../../mock/HostCenterMock/eventPosts.json';

function CategoryContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
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

  return (
    <CategoryPresenter
      mainEvents={eventPosts}
      type={query.get('type')}
      mappingType={mappingType}
      onChangePageNumber={onChangePageNumber}
      pageNumber={pageNumber}
      initializePageNumber={initializePageNumber}
    />
  );
}

export default CategoryContainer;
