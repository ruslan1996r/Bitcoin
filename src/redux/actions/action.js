import {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
} from "../types"

// PAGE
export const getPageRequest = (pageNumber) => ({
    type: GET_PAGE_REQUEST,
    payload: pageNumber
})
export const getPageSuccess = (page) => ({
    type: GET_PAGE_SUCCESS,
    payload: page
})

// CURRENCY
export const getCurrencyRequest = (id) => ({
    type: GET_CURRENCY_REQUEST,
    payload: id
})
export const getCurrencySuccess = (currency) => ({
    type: GET_CURRENCY_SUCCESS,
    payload: currency
})