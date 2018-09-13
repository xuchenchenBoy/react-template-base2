import { delay } from 'redux-saga';
import { takeEvery, takeLatest, throttle, put, take, fork, select, spawn, join, cancel, race, call, apply, cps } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as serviceLogin from '../services/login';
import * as types from '../actions/login';

// 登录
export function * login () {
  while (1) {
    const { payload } = yield take(types.USER_LOGIN_REQUEST);
    try {
      const res = yield call(serviceLogin.fakeAccountLogin, payload);
    } catch (e) {
      console.log(e);
    }
  }
}

export default function * () {
  yield fork(login);
}