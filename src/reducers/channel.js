export const LOAD_CHANNELS_REQUEST = 'LOAD_CHANNELS_REQUEST';
export const LOAD_CHANNELS_SUCCESS = 'LOAD_CHANNELS_SUCCESS';
export const LOAD_CHANNELS_FAILURE = 'LOAD_CHANNELS_FAILURE';

export const DELETE_CHANNEL_REQUEST = 'DELETE_CHANNEL_REQUEST';
export const DELETE_CHANNEL_SUCCESS = 'DELETE_CHANNEL_SUCCESS';
export const DELETE_CHANNEL_FAILURE = 'DELETE_CHANNEL_FAILURE';

export const initialState = {
  mainChannels: [],
  loadChannelLoading: false,
  loadChannelDone: false,
  loadChannelError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CHANNEL_REQUEST:
      return {
        ...state,
        loadChannelLoading: true,
        loadChannelDone: false,
        loadChannelError: null,
      };
    case DELETE_CHANNEL_SUCCESS:
      return {
        ...state,
        loadChannelLoading: false,
        loadChannelDone: true,
        loadChannelError: null,
        mainChannels: state.mainChannels.filter((v) => v.channelID !== action.data),
      };
    case DELETE_CHANNEL_FAILURE:
      return {
        ...state,
        loadChannelLoading: false,
        loadChannelError: action.error,
      };
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
