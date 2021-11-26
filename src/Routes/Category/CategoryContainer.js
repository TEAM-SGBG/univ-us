import { useLocation } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryPresenter from './CategoryPresenter';
import { LOAD_CATEGORY_EVENTS_REQUEST } from '../../reducers/post';

function CategoryContainer() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const type = query.get('type');
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);

  const {
    categoryEvents,
    loadCategoryEventsLoading,
    loadCategoryEventsDone,
    loadCategoryEventsError,
  } = useSelector(((state) => state.post));

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
    dispatch({ type: LOAD_CATEGORY_EVENTS_REQUEST, categoryType: type });
    initializePageNumber();
  }, [type]);

  return (
    <CategoryPresenter
      events={categoryEvents}
      mappingType={mappingType}
      onChangePageNumber={onChangePageNumber}
      pageNumber={pageNumber}
      loading={loadCategoryEventsLoading}
      done={loadCategoryEventsDone}
      error={loadCategoryEventsError}
    />
  );
}

export default CategoryContainer;
