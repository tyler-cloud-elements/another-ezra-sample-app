import {
  INSTANCE_CREATING,
  INSTANCE_SUCCESS,
  INSTANCE_FAILURE,
} from '../actions/action-types';

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: null,
};

export default (state = DEFAULT_STATE, payload) => {
  switch (payload.type) {
    case INSTANCE_CREATING:
      return state = {
        ...state,
        loading: true,
        error: null
      };
    case INSTANCE_SUCCESS:
      return state = {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...payload.data
        },
      };
    case INSTANCE_FAILURE:
      return state = {
        ...state,
        error: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};