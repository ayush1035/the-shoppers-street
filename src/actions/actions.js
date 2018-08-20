import * as types from '../constants/actionTypes.js';

export function fetchProducts(page)
{
    return {
        page: page,
        type:types.FETCH_DATA
     };
}

export function fetchProductsSuccess(products)
{
    return {
        type:types.FETCH_DATA_SUCCESS,
        products:products
    };
}
export function fetchProductsFailure(err)
{
    return {
        type:types.FETCH_DATA_FAILURE,
        error:err.message+ " DATA NOT FETCHED ERROR OCCURED"
    };
}
export function fetchProductDetail(_id)
{
    return {
        type: types.FETCH_PRODUCT_DETAIL,
        id: _id
    }
}

export function fetchProductDetailFailure(err)
{
    return {
        type: types.FETCH_PRODUCT_DETAIL_FAILURE,
        error: err.message
    }
}

export function fetchProductDetailSuccess(productDetail)
{
    return {
        type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
        productDetail: productDetail
    }
}
export function toggleLoader(loader)
{
    return {
        type:types.TOGGLE_LOADER,
        loader:loader
    };
}




