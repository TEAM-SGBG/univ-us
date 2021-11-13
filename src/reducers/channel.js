export const LOAD_CHANNELS_REQUEST = 'LOAD_CHANNELS_REQUEST';
export const LOAD_CHANNELS_SUCCESS = 'LOAD_CHANNELS_SUCCESS';
export const LOAD_CHANNELS_FAILURE = 'LOAD_CHANNELS_FAILURE';

export const initialState = {
  mainChannels: [],
  loadChannelLoading: false,
  loadChannelDone: false,
  loadChannelError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHANNELS_REQUEST:
      return {
        ...state,
        loadChannelLoading: true,
        loadChannelDone: false,
        loadChannelError: null,
      };
    case LOAD_CHANNELS_SUCCESS:
      return {
        ...state,
        loadChannelLoading: false,
        loadChannelDone: true,
        loadChannelError: null,
        mainChannels: action.data,
      };
    case LOAD_CHANNELS_FAILURE:
      return {
        ...state,
        loadChannelLoading: false,
        loadChannelError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
