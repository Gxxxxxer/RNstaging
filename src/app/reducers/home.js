import { combineReducers } from 'redux';
import { createAction, handleAction, handleActions } from 'redux-actions';

const home = handleActions({
    'TEXT'(state, action) {
        return Object.assign({}, state, action.payload)
        // return {
        //     ...state,
        //     ...action.payload
        // }
    },
    
}, {
       text:0
    });



export default home