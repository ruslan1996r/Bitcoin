import { put, takeLatest, call } from "redux-saga/effects";
import {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
} from "../types"
import Api from "../api/index"

function* getCurrency({ payload }) {
    try {
        const currency = yield call(Api.getCurrencyById, payload)
        yield put({ type: GET_CURRENCY_SUCCESS, payload: currency })
    } catch (e) {
        console.log('GET_CURRENCY', e)
    }
}

function* getPage({ payload }) {
    try {
        const page = yield call(Api.getPage, payload)
        yield put({ type: GET_PAGE_SUCCESS, payload: page })
    } catch (e) {
        console.log('GET_PAGE', e)
    }
}

export default function* watchSaga() {
    yield takeLatest(GET_CURRENCY_REQUEST, getCurrency)
    yield takeLatest(GET_PAGE_REQUEST, getPage)
}