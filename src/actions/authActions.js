import { Facebook } from 'expo';
import firebase from 'firebase';
import { FACEBOOK_APP_ID, auth } from '../config/fireConfig';
import {
  NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRM_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  CREATE_USER_FAIL
} from './types';

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const passwordConfirmChanged= (text) => {
  return {
    type: PASSWORD_CONFIRM_CHANGED,
    payload: text
  };
};

export const signInWithFacebook = () => async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email']
  });
  if (type === 'success') {
      //Firebase credential is created with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    auth.signInAndRetrieveDataWithCredential(credential)
      .then(user => {
        loginUserSuccess(dispatch, user)
      })
      .catch(() => {
        loginUserFail(dispatch)
      });
  }
};

export const signIn = ({email, password}) => {
  return (dispatch) => {
  dispatch({ type: LOGIN_USER });

  auth.signInWithEmailAndPassword(email,password)
    .then(user => {
      loginUserSuccess(dispatch, user)
    })
    .catch(() => {
      loginUserFail(dispatch)
    });
  };
};

export const signUp = ({email, password, passwordConfirm}) => {
  return (dispatch) => {
    if (password !== passwordConfirm) {
      const error = 'Passwords must match.';
      createUserFail(dispatch, error);
    } else {
    dispatch({ type: LOGIN_USER });
    auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user)
      })
      .catch(error => {
        createUserFail(dispatch, error.code)
      });
    }
  };
}

const createUserFail = (dispatch, error) => {
  dispatch({ type: CREATE_USER_FAIL, payload: error });
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
