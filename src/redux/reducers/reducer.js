import {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
} from "../types"

const initialState = {
    isLoading: true,
    currency: {},
    currencies: [],
    pageNumbers: [],
    numberOfPages: 0
}

const currencyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case
            GET_PAGE_REQUEST,
            GET_CURRENCY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currencies: payload.page,
                pageNumbers: payload.pageNumbers,
                numberOfPages: payload.numberOfPages
            };
        case GET_CURRENCY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currency: payload
            }
        default:
            return state
    }
}

export default currencyReducer