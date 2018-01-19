import { combineReducers } from 'redux';
import HomeReducer from './containers/homeContainer/homeReducer';


const rootReducer = combineReducers({
    searchData: HomeReducer

    
});

export default rootReducer;