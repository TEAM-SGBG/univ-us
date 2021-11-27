import { useLocation } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoryPresenter from './CategoryPresenter';
import { LOAD_CATEGORY_EVENTS_REQUEST } from '../../reducers/post';

const TitleWrapper = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #5C3FBF;
  text-decoration: underline;
  justify-self: flex-start;
  letter-spacing: 0.56px;
  padding-top: 64px;
  max-width: 1100px;

  @media screen and (min-width: 0px) {
    width: 360px;
    display: block;
  }

  @media screen and (min-width: 425px) {
    width: 360px;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1196px) {
    width: 1100px;
  }
`;

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

  const EventTitle = useCallback(() => {
    if (type === 'sushi') return <TitleWrapper>수시행사</TitleWrapper>;
    if (type === 'jungshi') return <TitleWrapper>정시행사</TitleWrapper>;
    if (type === 'fair') return <TitleWrapper>대학박람회</TitleWrapper>;
    return <TitleWrapper>전체</TitleWrapper>;
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
      EventTitle={EventTitle}
      onChangePageNumber={onChangePageNumber}
      pageNumber={pageNumber}
      loading={loadCategoryEventsLoading}
      done={loadCategoryEventsDone}
      error={loadCategoryEventsError}
    />
  );
}

export default CategoryContainer;
