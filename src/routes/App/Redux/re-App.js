import * as types from "./types";
  
const initState = {
  isLoading: false,
  openKeys: [],
};
  
const App = (state = initState, action) => {
  switch (action.type) {
    case types.APP_HANDLE_STATE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
};
  
export default App