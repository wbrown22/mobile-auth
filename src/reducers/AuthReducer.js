import {
  NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRM_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  CREATE_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  user: null,
  error: '',
  createError: '',
  loading: false,
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case PASSWORD_CONFIRM_CHANGED:
      return { ...state, passwordConfirm: action.payload};
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', loading: false, password: '' };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case CREATE_USER_FAIL:
      return { ...state, loading: false, createError: action.payload, password: '', email: '', passwordConfirm: ''};
    default: return state;
  }
};
