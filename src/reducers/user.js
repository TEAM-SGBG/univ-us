const initialState = {
  loginLoading: false,
  isLoggedIn: false,
  loginError: null,

  subscribeChannelsLoading: false,
  subscribeChannels: [],
  subscribeChannelsError: false,

};

export const GET_SUBSCRIBE_CHANNELS_REQUEST = 'GET_SUBSCRIBE_CHANNELS_REQUEST';
export const GET_SUBSCRIBE_CHANNELS_SUCCESS = 'GET_SUBSCRIBE_CHANNELS_SUCCESS';
export const GET_SUBSCRIBE_CHANNELS_FAILURE = 'GET_SUBSCRIBE_CHANNELS_FAILURE';

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
    case GET_SUBSCRIBE_CHANNELS_REQUEST:
      return {
        ...state,
        subscribeChannelsLoading: true,
        subscribeChannels: [],
      };
    case GET_SUBSCRIBE_CHANNELS_SUCCESS:
      return {
        ...state,
        subscribeChannelsLoading: false,
        subscribeChannels: [...action.data],
      };
    case GET_SUBSCRIBE_CHANNELS_FAILURE:
      return {
        ...state,
        subscribeChannelsLoading: false,
        subscribeChannels: [...state.subscribeChannels],
        subscribeChannelsError: [...action.data],
      };
    default:
      return state;
  }
};

export default reducer;
