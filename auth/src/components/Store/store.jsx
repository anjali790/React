import {createStore} from 'redux';

const DEFAULT_STATE ={
    'LoggedInUser': null,
}

const authReducer = (state= DEFAULT_STATE, action) =>{
    return state;
}

const store = createStore(authReducer);

export default store;