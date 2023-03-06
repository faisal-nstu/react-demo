import { combineReducers } from 'redux';
import { dashboardReducer } from './modules/dashboard';

export default combineReducers({
    dashboard: dashboardReducer
})
