import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import channel from './channel';
import hostcenter from './hostcenter';

const initialState = {
  status: 'test',
};

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case 'TEST':
        return state;
      default:
        return state;
    }
  },
  user,
  post,
  channel,
  hostcenter,
});

export default rootReducer;
