import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    products: []
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return Object.assign({}, ...state, { products: action.products });
        default:
            return state;

    }
};

