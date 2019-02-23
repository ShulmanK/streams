import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS
} from "./types";

import jsonPlaceholder from '../api/jsonPlaceholder'

export const signIn = (ID) => {
    return {
        type: SIGN_IN,
        payload: ID,
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const createStream = (formValues) => async dispatch  => {
    const response = await jsonPlaceholder.post('/streams', formValues);
    dispatch({type: CREATE_STREAM, payload: response.data})
};

export const fetchStreams = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.get('/streams', formValues);
    dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const fetchStream = (id, formValues) => async dispatch => {
    const response = await jsonPlaceholder.get(`/streams/${id}`, formValues);
    dispatch({type: FETCH_STREAM, payload: response.data})
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await jsonPlaceholder.put(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data})
};

export const deleteStream = (id) => async dispatch => {
    await jsonPlaceholder.post(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id})
};


