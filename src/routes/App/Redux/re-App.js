import * as types from "./types";
  
const initState = {
  isLoading: false,
  list: [],
};
  
const App = (state = initState, action) => {
  switch (action.type) {
    case types.APP_HANDLE_STATE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case types.APP_HANDLE_STATE_GLOBAL: {
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