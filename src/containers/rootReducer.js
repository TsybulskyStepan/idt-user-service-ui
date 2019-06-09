import { combineReducers } from 'redux';

import userPageReducer from './UserPage/reducer';

const rootReducer = combineReducers({
	userPage: userPageReducer,
});

export default rootReducer;