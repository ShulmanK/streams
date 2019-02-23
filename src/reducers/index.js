import {combineReducers} from 'redux';
import googleAuthReducer from "./googleAuthReducer";
import streams from './streams'
import {reducer as formReducer} from 'redux-form'


export default combineReducers({
        auth: googleAuthReducer,
        form: formReducer,
        streams: streams,
    }
)