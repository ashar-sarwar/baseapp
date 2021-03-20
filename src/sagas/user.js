import {take, put, call, fork} from 'redux-saga/effects';
import {
  USER_SIGNUP,
  USER_SIGNIN,
  USER_SIGNOUT,
  UPDATE_USER_PROFILE,
  USER_FORGOT_PASSWORD,
  USER_CONFIRM_OTP_FGPASS,
  USER_UPDATE_PASSWORD,
  CONTACT_ADMIN,
  GET_PROFILE_SECTIONS,
  POST_PROFILE_DATA,
  DELETE_PROFILE_SUBSECTION_DATA,
} from '../actions/ActionTypes';
import {SAGA_ALERT_TIMEOUT} from '../constants';
import {userSigninSuccess} from '../actions/UserActions';

function* signin() {}

export default function* root() {
  yield fork(signin);
}
