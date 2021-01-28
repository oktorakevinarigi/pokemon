import * as types from "./types";
  
const initState = {
  isLoading: false,
  detail: null,
};
  
const App = (state = initState, action) => {
  switch (action.type) {
    case types.DETAIL_HANDLE_STATE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case types.DETAIL_HANDLE_STATE_GLOBAL: {
        return {
            ...state,
            ...action.data
          };
    }
    default:
      return state;
  }
};
  
export default App