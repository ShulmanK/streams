import {combineReducers} from "redux";
import authReducer from './googleAuthReducer';
import {reducer as formReducer} from 'redux-form';
import streams from './streams'

export default combineReducers({
    auth: authReducer ,
    form: formReducer,
    streams: streams

});