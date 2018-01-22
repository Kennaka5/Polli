import { combineReducers } from 'redux';
import HomeReducer from './containers/homeContainer/homeReducer';
import VisitorReducer from './containers/visitorContainer/visitorReducer';
import AdminReducer from './containers/adminContainer/adminReducer';
import CreateSurveyReducer from './containers/createSurveyContainer/createSurveyReducer';

const rootReducer = combineReducers({
    searchData: HomeReducer,
    visitorData: VisitorReducer,
    adminData: AdminReducer,
    questionData: CreateSurveyReducer    
});

export default rootReducer;