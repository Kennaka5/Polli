const defaultState = {
    username: "",
    password: "",
  };
  
  export default function searchReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'GET_SEARCH_DATA_FULFILLED': {
        return {
          ...state,
          login: payload
        };
      }
      default: {
        return state;
      }
    }
  }
  