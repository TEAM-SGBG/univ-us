import produce from 'immer';

const initialState = {
  myChannels: [],
  myEvents: [],
  loadMyChannelsLoading: false,
  loadMyChannelsDone: false,
  loadMyChannelsError: null,

  loadMyEventsLoading: false,
  loadMyEventsDone: false,
  loadMyEventsError: null,

  createMyChannelLoading: false,
  createMyChannelDone: false,
  createMyChannelError: null,

  createMyEventLoading: false,
  createMyEventDone: false,
  createMyEventError: null,

  changeMyChannelLoading: false,
  changeMyChannelDone: false,
  changeMyChannelError: null,

  deleteMyChannelLoading: false,
  deleteMyChannelDone: false,
  deleteMyChannelError: null,

  deleteMyEventLoading: false,
  deleteMyEventDone: false,
  deleteMyEventError: null,

  loadMyEventInfoLoading: false,
  loadMyEventInfoDone: false,
  loadMyEventInfoError: null,

  loadEventParticipantLoading: false,
  loadEventParticipantDone: false,
  loadEventParticipantError: null,

  urlDuplicateCheckLoading: false,
  urlDuplicateCheckDone: false,
  urlDuplicateCheckError: null,
};

export const LOAD_EVENT_PARTICIPANT_REQUEST = 'LOAD_EVENT_PARTICIPANT_REQUEST';
export const LOAD_EVENT_PARTICIPANT_SUCCESS = 'LOAD_EVENT_PARTICIPANT_SUCCESS';
export const LOAD_EVENT_PARTICIPANT_FAILURE = 'LOAD_EVENT_PARTICIPANT_FAILURE';

export const LOAD_MY_EVENT_INFO_REQUEST = 'LOAD_MY_EVENT_INFO_REQUEST';
export const LOAD_MY_EVENT_INFO_SUCCESS = 'LOAD_MY_EVENT_INFO_SUCCESS';
export const LOAD_MY_EVENT_INFO_FAILURE = 'LOAD_MY_EVENT_INFO_FAILURE';

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

export const URL_DUPLICATE_CHECK_REQUEST = 'URL_DUPLICATE_CHECK_REQUEST';
export const URL_DUPLICATE_CHECK_SUCCESS = 'URL_DUPLICATE_CHECK_SUCCESS';
export const URL_DUPLICATE_CHECK_FAILURE = 'URL_DUPLICATE_CHECK_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MY_CHANNELS_REQUEST:
      draft.loadMyChannelsLoading = true;
      draft.loadMyChannelsDone = false;
      draft.loadMyChannelsError = null;
      break;
    case LOAD_MY_CHANNELS_SUCCESS:
      draft.myChannels = action.data;
      draft.loadMyChannelsLoading = false;
      draft.loadMyChannelsDone = true;
      break;
    case LOAD_MY_CHANNELS_FAILURE:
      draft.loadMyChannelsLoading = false;
      draft.loadMyChannelsDone = false;
      draft.loadMyChannelsError = action.error;
      break;
    case CREATE_MY_CHANNEL_REQUEST:
      draft.createMyChannelsLoading = true;
      draft.createMyChannelsDone = false;
      draft.createMyChannelsError = null;
      break;
    case CREATE_MY_CHANNEL_SUCCESS:
      // 채널의 행사 정보로
      draft.createMyChannelsLoading = false;
      draft.createMyChannelsDone = true;
      break;
    case CREATE_MY_CHANNEL_FAILURE:
      draft.createMyChannelsLoading = false;
      draft.createMyChannelsDone = false;
      draft.createMyChannelsError = action.error;
      break;
    case URL_DUPLICATE_CHECK_REQUEST:
      draft.urlDuplicateCheckLoading = true;
      draft.urlDuplicateCheckDone = false;
      break;
    case URL_DUPLICATE_CHECK_SUCCESS:
      draft.urlDuplicateCheckLoading = false;
      draft.urlDuplicateCheckDone = action.data;
      break;
    case URL_DUPLICATE_CHECK_FAILURE:
      draft.urlDuplicateCheckLoading = false;
      draft.urlDuplicateCheckDone = action.data;
      draft.urlDuplicateCheckError = action.error;
      break;
    case CHANGE_MY_CHANNEL_REQUEST:
      draft.changeMyChannelLoading = true;
      draft.changeMyChannelDone = false;
      break;
    case CHANGE_MY_CHANNEL_SUCCESS: {
      draft.changeMyChannelLoading = false;
      draft.changeMyChannelDone = action.data.success;
      const channel = draft.myChannels.find((myChannel) => myChannel.channel_id === action.data.channelID);
      if (channel) channel.channel_name = action.data.channelName;
      break;
    }
    case CHANGE_MY_CHANNEL_FAILURE:
      draft.changeMyChannelLoading = false;
      draft.changeMyChannelDone = false;
      draft.changeMyChannelError = action.error;
      break;
    case DELETE_MY_CHANNEL_REQUEST:
      draft.deleteMyChannelLoading = true;
      draft.deleteMyChannelDone = false;
      break;
    case DELETE_MY_CHANNEL_SUCCESS: {
      draft.deleteMyChannelLoading = false;
      draft.deleteMyChannelDone = action.data.success;
      draft.myChannels = draft.myChannels.filter((myChannel) => myChannel.channel_id !== action.data.channel_id);
      break;
    }
    case DELETE_MY_CHANNEL_FAILURE:
      draft.deleteMyChannelLoading = false;
      draft.deleteMyChannelDone = false;
      draft.deleteMyChannelError = action.error;
      break;
    case LOAD_MY_EVENTS_REQUEST:
      draft.loadMyEventsLoading = true;
      draft.loadMyEventsDone = false;
      break;
    case LOAD_MY_EVENTS_SUCCESS: {
      draft.loadMyEventsLoading = false;
      draft.loadMyEventsDone = action.data.success;
      draft.myEvents = action.data;
      break;
    }
    case LOAD_MY_EVENTS_FAILURE:
      draft.loadMyEventsLoading = false;
      draft.loadMyEventsDone = false;
      draft.loadMyEventsError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
