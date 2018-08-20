import * as ActionTypes from "../constants/actionTypes.js";

const initialState = {
    error: ""
};

export const errorHandleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA_FAILURE:
            return Object.assign({}, ...state, { error: action.error });
        default:
            return state;
    }
};

