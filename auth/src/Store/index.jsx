import { createStore } from 'redux';

const DEFAULT_STATE = {
    'LoggedInUser': null,
}

const authReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_LOGIN_DATA') {
        return { "loggedInUser": action.payload }
    }
    return state;
}

const store = createStore(authReducer);

export default store;