import * as types from './types'

export const handleState = (field, value) => {
  return {
    type: types.APP_HANDLE_STATE,
    field, 
    value
  };
}

export const fetchGetList = () => {
  return {
    type: types.APP_GET_LIST_FETCH
  };
}