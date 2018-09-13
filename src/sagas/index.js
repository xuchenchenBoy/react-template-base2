import { fork } from 'redux-saga/effects';
import viewConfig from './viewConfig'
import login from './login'

export default function* () {
  yield [
    fork(viewConfig),
    fork(login),
  ]
}
