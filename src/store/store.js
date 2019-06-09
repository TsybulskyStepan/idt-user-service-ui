import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../containers/rootReducer.js';
import thunk from 'redux-thunk';


export default function configureStore() {
	const persistedState = {};
	const middlewares = [thunk];

    const store = createStore(
		rootReducer,
		persistedState,
		applyMiddleware(...middlewares)
	);

	return store;
}