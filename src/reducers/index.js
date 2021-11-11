import { combineReducers } from 'redux';

const initialState = {
  status: 'test',
};

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case 'TEST':
        console.log('test');
        return state;
      default:
        return state;
    }
  },
});

export default rootReducer;
