import produce from 'immer';

const initialState = {
  me: {},

  authCheckLoading: false,
  isLoggedIn: false,
  authCheckError: false,

  subscribeChannels: [],
  loadSubscribeChannelsLoading: false,
  loadSubscribeChannelsDone: false,
  loadSubscribeChannelsError: null,
};

export const LOAD_SUBSCRIBE_CHANNELS_REQUEST = 'LOAD_SUBSCRIBE_CHANNELS_REQUEST';
export const LOAD_SUBSCRIBE_CHANNELS_SUCCESS = 'LOAD_SUBSCRIBE_CHANNELS_SUCCESS';
export const LOAD_SUBSCRIBE_CHANNELS_FAILURE = 'LOAD_SUBSCRIBE_CHANNELS_FAILURE';

export const AUTH_CHECK_REQUEST = 'AUTH_CHECK_REQUEST';
export const AUTH_CHECK_SUCCESS = 'AUTH_CHECK_SUCCESS';
export const AUTH_CHECK_FAILURE = 'AUTH_CHECK_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case AUTH_CHECK_REQUEST:
      draft.authCheckLoading = true;
      draft.isLoggedIn = false;
      break;
    case AUTH_CHECK_SUCCESS:
      draft.authCheckLoading = false;
      draft.isLoggedIn = action.data;
      draft.me = action.data;
      break;
    case AUTH_CHECK_FAILURE:
      draft.authCheckLoading = false;
      draft.isLoggedIn = false;
      draft.authCheckError = action.data;
      break;
    case LOAD_SUBSCRIBE_CHANNELS_REQUEST:
      draft.subscribeChannels = [];
      draft.loadSubscribeChannelsLoading = true;
      draft.loadSubscribeChannelsDone = false;
      draft.loadSubscribeChannelsError = null;
      break;
    case LOAD_SUBSCRIBE_CHANNELS_SUCCESS:
      draft.subscribeChannels = action.data;
      draft.loadSubscribeChannelsLoading = false;
      draft.loadSubscribeChannelsDone = true;
      break;
    case LOAD_SUBSCRIBE_CHANNELS_FAILURE:
      draft.loadSubscribeChannelsLoading = false;
      draft.loadSubscribeChannelsDone = false;
      draft.loadSubscribeChannelsError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
