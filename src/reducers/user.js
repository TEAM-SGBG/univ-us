const initialState = {
  loginLoading: false,
  isLoggedIn: false,
  loginError: null,

  subscribeChannels: [],
  loadSubscribeChannelsLoading: false,
  loadSubscribeChannelsDone: false,
  loadSubscribeChannelsError: null,

  loadMyChannelsLoading: false,
  loadMyChannelsDone: false,
  loadMyChannelsError: null,

  loadLoadMyEventsLoading: false,
  loadLoadMyEventsDone: false,
  loadLoadMyEventsError: null,

  loadCreateMyChannelLoading: false,
  loadCreateMyChannelDone: false,
  loadCreateMyChannelError: null,

  loadCreateMyEventLoading: false,
  loadCreateMyEventDone: false,
  loadCreateMyEventError: null,

  loadChangeMyChannelLoading: false,
  loadChangeMyChannelDone: false,
  loadChangeMyChannelError: null,

  loadDeleteMyChannelLoading: false,
  loadDeleteMyChannelDone: false,
  loadDeleteMyChannelError: null,

  loadDeleteMyEventLoading: false,
  loadDeleteMyEventDone: false,
  loadDeleteMyEventError: null,

};

export const LOAD_MY_CHANNELS_REQUEST = 'LOAD_MY_CHANNELS_REQUEST';
export const LOAD_MY_CHANNELS_SUCCESS = 'LOAD_MY_CHANNELS_SUCCESS';
export const LOAD_MY_CHANNELS_FAILURE = 'LOAD_MY_CHANNELS_FAILURE';

export const LOAD_MY_EVENTS_REQUEST = 'LOAD_MY_EVENTS_REQUEST';
export const LOAD_MY_EVENTS_SUCCESS = 'LOAD_MY_EVENTS_SUCCESS';
export const LOAD_MY_EVENTS_FAILURE = 'LOAD_MY_EVENTS_FAILURE';

export const CREATE_MY_CHANNEL_REQUEST = 'CREATE_MY_CHANNEL_REQUEST';
export const CREATE_MY_CHANNEL_SUCCESS = 'CREATE_MY_CHANNEL_SUCCESS';
export const CREATE_MY_CHANNEL_FAILURE = 'CREATE_MY_CHANNEL_FAILURE';

export const CREATE_MY_EVENT_REQUEST = 'CREATE_MY_EVENT_REQUEST';
export const CREATE_MY_EVENT_SUCCESS = 'CREATE_MY_EVENT_SUCCESS';
export const CREATE_MY_EVENT_FAILURE = 'CREATE_MY_EVENT_FAILURE';

export const CHANGE_MY_CHANNEL_REQUEST = 'CHANGE_MY_CHANNEL_REQUEST';
export const CHANGE_MY_CHANNEL_SUCCESS = 'CHANGE_MY_CHANNEL_SUCCESS';
export const CHANGE_MY_CHANNEL_FAILURE = 'CHANGE_MY_CHANNEL_FAILURE';

export const DELETE_MY_CHANNEL_REQUEST = 'DELETE_MY_CHANNEL_REQUEST';
export const DELETE_MY_CHANNEL_SUCCESS = 'DELETE_MY_CHANNEL_SUCCESS';
export const DELETE_MY_CHANNEL_FAILURE = 'DELETE_MY_CHANNEL_FAILURE';

export const DELETE_MY_EVENT_REQUEST = 'DELETE_MY_EVENT_REQUEST';
export const DELETE_MY_EVENT_SUCCESS = 'DELETE_MY_EVENT_SUCCESS';
export const DELETE_MY_EVENT_FAILURE = 'DELETE_MY_EVENT_FAILURE';

export const LOAD_SUBSCRIBE_CHANNELS_REQUEST = 'LOAD_SUBSCRIBE_CHANNELS_REQUEST';
export const LOAD_SUBSCRIBE_CHANNELS_SUCCESS = 'LOAD_SUBSCRIBE_CHANNELS_SUCCESS';
export const LOAD_SUBSCRIBE_CHANNELS_FAILURE = 'LOAD_SUBSCRIBE_CHANNELS_FAILURE';

export const AUTH_CHECK_REQUEST = 'AUTH_CHECK_REQUEST';
export const AUTH_CHECK_SUCCESS = 'AUTH_CHECK_SUCCESS';
export const AUTH_CHECK_FAILURE = 'AUTH_CHECK_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHECK_REQUEST:
      return {
        ...state,
        loginLoading: true,
        isLoggedIn: false,
      };
    case AUTH_CHECK_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: action.data,
      };
    case AUTH_CHECK_FAILURE:
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: false,
        loginError: action.data,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOAD_SUBSCRIBE_CHANNELS_REQUEST:
      return {
        ...state,
        subscribeChannels: [],
        loadSubscribeChannelsLoading: true,
        loadSubscribeChannelsDone: false,
        loadSubscribeChannelsError: null,
      };
    case LOAD_SUBSCRIBE_CHANNELS_SUCCESS:
      return {
        ...state,
        subscribeChannels: [...action.data],
        loadSubscribeChannelsLoading: false,
        loadSubscribeChannelsDone: true,
      };
    case LOAD_SUBSCRIBE_CHANNELS_FAILURE:
      return {
        ...state,
        subscribeChannels: [...state.subscribeChannels],
        loadSubscribeChannelsLoading: false,
        loadSubscribeChannelsDone: false,
        loadSubscribeChannelsError: [...action.error],
      };
    default:
      return state;
  }
};

export default reducer;
