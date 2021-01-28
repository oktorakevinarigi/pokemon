import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as types from './types'
import * as API from '../../../Network/API'
import {BASE_URL, URL} from '../../../Network/Config'

export function* fetchDetail(param) {
  try {
    const res = yield call(API.GET, BASE_URL + URL.GET_GETAIL + "/"+ param.id)
    yield put({ type: types.DETAIL_HANDLE_STATE_GLOBAL, data: {detail: res.data} })
  } catch (err) {
    console.log("Login error", err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.DETAIL_GET_LIST_FETCH, fetchDetail),
  ])
}