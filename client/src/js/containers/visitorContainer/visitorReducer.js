const defaultState = {
    address : "",
    error: "",
  };
  
  export default function visitorReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'GET_SEARCH_DATA_FULFILLED': {
        return {
          ...state,
          address: payload
        };
      }
      default: {
        return state;
      }
    }
  }