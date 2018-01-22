import { connect } from 'react-redux';
import CreateSurveyContainer from "./createSurveyContainer";


function mapStoreToProps(store) {
    return {
        questionData: store.questionsData
    };
}

export default connect(mapStoreToProps)(CreateSurveyContainer);