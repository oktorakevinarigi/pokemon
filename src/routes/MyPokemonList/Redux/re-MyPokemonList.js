import * as types from "./types";
  
const initState = {
  list: [],
};
  
const App = (state = initState, action) => {
  switch (action.type) {
    case types.MY_LIST_HANDLE_STATE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case types.MY_LIST_HANDLE_STATE_GLOBAL: {
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