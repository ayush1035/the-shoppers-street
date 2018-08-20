
import {delay} from "redux-saga";
import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";
import * as actions from"../actions/actions.js";
import * as API from "../commonUtils/api.js";

export function* fetchSaga(page) {

    try {
        yield put(actions.toggleLoader(true));
        yield call(delay,1000);
        let products = yield call(API.getApiCall,page);
        yield put(actions.toggleLoader(false));
        yield put(actions.fetchProductsSuccess(products.products));
        
    }
    catch (err) {   
        yield put(actions.fetchProductsFailure(err));
        yield put(actions.toggleLoader(false));
    }
}
export function* fetchDetailSaga(action)
{
    try {
        yield put(actions.toggleLoader(true));
        yield call(delay,1000);
        let productDetail = yield call(API.getApiDetailCall, action.id);
        let currObj = productDetail.product_variations.find((option)=>option._id == action.id)
        productDetail.currObj = currObj;
        yield put(actions.toggleLoader(false));
        yield put(actions.fetchProductDetailSuccess(productDetail));
    }
    catch (err) {
        yield put(actions.fetchProductDetailFailure(err));
        yield put(actions.toggleLoader(false));
    }
}

export function* watchFetchDetailSaga() {
    yield takeEvery(actionTypes.FETCH_PRODUCT_DETAIL, fetchDetailSaga);
}


export function* watchFetchSaga() {

    yield takeEvery(actionTypes.FETCH_DATA, fetchSaga);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([watchFetchSaga(),watchFetchDetailSaga()
    ]);
}