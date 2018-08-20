import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    productDetail: {}
};

export const detailReducer  = (state = initialState,  action) => {
    switch (action.type)
    {
        case actionTypes.FETCH_PRODUCT_DETAIL_SUCCESS:
            return Object.assign({}, ...state, {productDetail:action.productDetail});
        default:
            return state;    
    }
}