import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as types from './types'
import * as API from '../../../Network/API'
import {BASE_URL, URL} from '../../../Network/Config'

export function* fetchList() {
  try {
    const res = yield call(API.GET, BASE_URL + URL.GET_LIST)
    yield put({ type: types.APP_HANDLE_STATE_GLOBAL, data:{ list: res.data.results } })
  } catch (err) {
    console.log("Login error", err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.APP_GET_LIST_FETCH, fetchList),
  ])
}