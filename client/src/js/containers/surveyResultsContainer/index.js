import { connect } from 'react-redux';
import SurveyResultsContainer from "./surveyResultsContainer";


function mapStoreToProps(store) {
    return {
        surveyResultsData: store.surveyResultsData
    };
}

export default connect(mapStoreToProps)(SurveyResultsContainer);