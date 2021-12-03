import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import channel from './channel';

const initialState = {
  status: 'test',
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
  post,
  channel,
});

export default rootReducer;
