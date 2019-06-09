import {
    LOAD_USERS_SUCCESS,
} from './actions';

const defaultState = {
    users: []
};

const userPageReducer = (state = defaultState, action) => {
    switch (action.type) {

        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

export default userPageReducer;