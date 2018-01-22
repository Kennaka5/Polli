const defaultState = {
    survey_id: "",
    question: "",
    answer_one: "",
    answer_two: "",
    answer_three: "",
    answer_four: ""
};

export default function createSurveyReducer (state = defaultState, action) {
    const{ type, payload } = action;

    switch (type) {

    
        case "DO_SOMETHING": {
            return {
                ...state,
            questions: payload
            }
        }
        default: {
            return state;
        }
    }
}