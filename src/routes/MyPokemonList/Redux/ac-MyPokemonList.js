import * as types from './types'

export const handleState = (field, value) => {
  return {
    type: types.MY_LIST_HANDLE_STATE,
    field, 
    value
  };
}

export const fetchGetList = () => {
  return {
    type: types.MY_LIST_GET_LIST_FETCH
  };
}