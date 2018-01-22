const defaultState = {
    surveyResults_id: ""
};

export default function adminReducer (state = defaultState, action) {
    const{ type, payload } = action;

    switch (type) {

    
        case "DO_SOMETHING": {
            return {
                ...state,
            address: payload
            }
        }
        default: {
            return state;
        }
    }
}