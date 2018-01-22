import { connect } from 'react-redux';
import SurveyContainer from "./surveyContainer";


function mapStoreToProps(store) {
    return {
        surveyData: store.surveyData
    };
}

export default connect(mapStoreToProps)(SurveyContainer);