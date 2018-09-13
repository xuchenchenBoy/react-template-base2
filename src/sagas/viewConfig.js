import { takeLatest } from 'redux-saga';
import { put, call, select, fork, take, takem } from 'redux-saga/effects';
import * as types from '../actions';
import { setDocumentTitle } from '../utils';

export function *handleUpdateViewConfig ({payload}) {
  const {documentTitle, shareData} = payload;
  if (documentTitle) {
    setDocumentTitle(documentTitle);
  }
}

export default function * () {
  yield takeLatest(types.SET_VIEW_CONFIG, handleUpdateViewConfig);
}


