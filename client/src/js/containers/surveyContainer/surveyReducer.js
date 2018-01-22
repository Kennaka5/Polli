const defaultState = {
    survey_id: ""
};

export default function surveyReducer (state = defaultState, action) {
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