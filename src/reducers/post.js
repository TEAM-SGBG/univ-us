const initialState = {
  categoryEvents: [],
  loadCategoryEventsLoading: false,
  loadCategoryEventsDone: false,
  loadCategoryEventsError: null,
};

export const LOAD_CATEGORY_EVENTS_REQUEST = 'LOAD_CATEGORY_EVENTS_REQUEST';
export const LOAD_CATEGORY_EVENTS_SUCCESS = 'LOAD_CATEGORY_EVENTS_SUCCESS';
export const LOAD_CATEGORY_EVENTS_FAILURE = 'LOAD_CATEGORY_EVENTS_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY_EVENTS_REQUEST:
      return {
        ...state,
        categoryEvents: [],
        loadCategoryEventsLoading: true,
        loadCategoryEventsDone: false,
        loadCategoryEventsError: null,
      };
    case LOAD_CATEGORY_EVENTS_SUCCESS:
      return {
        ...state,
        categoryEvents: [...action.data],
        loadCategoryEventsLoading: false,
        loadCategoryEventsDone: true,
        loadCategoryEventsError: null,
      };
    case LOAD_CATEGORY_EVENTS_FAILURE:
      return {
        ...state,
        categoryEvents: [],
        loadCategoryEventsLoading: false,
        loadCategoryEventsDone: false,
        loadCategoryEventsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
