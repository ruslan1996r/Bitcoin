import React, { useEffect } from 'react'

import Table from "../../components/Table"
import Pagination from "../../components/Pagination"
import Loading from "../../components/Loading"

function CurrenciesPage(props) {
    const {
        match,
        currencies,
        isLoading,
        pageNumbers,
        numberOfPages,
        getPageRequest
    } = props
    const pageNumber = match.params.pageNumber

    useEffect(() => {
        getPageRequest(pageNumber)
        setInterval(() => {
            getPageRequest(pageNumber) // Цикл для обновления данных валюты с сервера
        }, 30000)
    }, [pageNumber])

    return (
        <div>
            {isLoading && <Loading>Loading...</Loading>}
            <Pagination pageNumbers={pageNumbers} numberOfPages={numberOfPages} pageNumber={+pageNumber} />
            <Table currencies={currencies} />
        </div>
    )
}

export default CurrenciesPage