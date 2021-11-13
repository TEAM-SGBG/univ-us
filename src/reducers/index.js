import { combineReducers } from 'redux';
import user from './user';
import eventPosts from './eventPosts';
import channel from './channel';

const initialState = {
  status: 'test',
  user: {
    isLoggedIn: false,
  },
  hostcenter: {
    isDuplicated: null,
    currentChannel: null,
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
      case 'URL_DUPLICATE_CHECK_REQUEST':
        return {
          ...state,
          hostcenter: {
            ...state.hostcenter,
            isDuplicated: true,
          },
        };
      case 'CREATE_CHANNEL_REQUEST':
        return {
          ...state,
          hostcenter: {
            ...state.hostcenter,
            currentChannel: action.data.channelID,
          },
        };
      default:
        return state;
    }
  },
  user,
  eventPosts,
  channel,
});

export default rootReducer;
