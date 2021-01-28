import * as types from './types'

export const handleState = (field, value) => {
  return {
    type: types.DETAIL_HANDLE_STATE,
    field, 
    value
  };
}

export const fetchGetDetail = (id) => {
  return {
    type: types.DETAIL_GET_LIST_FETCH,
    id
  };
}