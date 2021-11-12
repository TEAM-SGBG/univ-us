import { combineReducers } from 'redux';

const initialState = {
  status: 'test',
  user: {
    isLoggedIn: false,
  },
};

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case 'TEST':
        console.log('test');
        return state;
      case 'LOGIN_REQUEST':
        return {
          ...state,
          user: {
            ...state.user,
            isLoggedIn: true,
          },
        };
      case 'LOGOUT_REQUEST':
        return {
          ...state,
          user: {
            ...state.user,
            isLoggedIn: false,
          },
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
