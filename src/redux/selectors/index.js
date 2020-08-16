import { createSelector } from 'reselect'

const getCurrencies = state => {
    return state.rootState.currencies
}
const getCurrency = state => {
    return state.rootState.currency
}
const getPageNumbers = state => {
    return state.rootState.pageNumbers
}
const getNumberOfPages = state => {
    return state.rootState.numberOfPages
}
const getIsLoading = state => {
    return state.rootState.isLoading
}
const getConcFiltred = createSelector(getCurrencies, (concurrencies) => {
    return concurrencies.map(c => {
        return ({
            id: c.id,
            name: c.name,
            capitalization: c.quote.USD.market_cap,
            price: c.quote.USD.price,
            marketSize: c.quote.USD.volume_24h,
            dailyChange: c.quote.USD.percent_change_24h
        })
    })
})

export {
    getPageNumbers,
    getCurrency,
    getNumberOfPages,
    getIsLoading,
    getConcFiltred
}