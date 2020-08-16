import React, { useEffect } from 'react'
import styled from 'styled-components'

import Loading from "../../components/Loading"

const CurrencyContainer = styled.div`
    padding: 4em;
`
const Heading = styled.h1`
    font-size: 2em;
`
const P = styled.p`
    margin: 1em 0px;
`
const Li = styled.li`
    list-style: circle;
    margin: 5px 30px;
`

function CurrencyPage(props) {
    const { match, getCurrencyRequest, isLoading, currency, getCurrencySuccess } = props
    const id = match.params.id

    useEffect(() => {
        getCurrencyRequest(id)  // Инициализация выбранной валюты
        setInterval(() => {
            getCurrencyRequest(id) // Цикл для обновления данных валюты с сервера
        }, 30000)
        return () => {
            getCurrencySuccess({})
        }
    }, [])

    return (
        <CurrencyContainer>
            {isLoading && <Loading>Loading...</Loading>}
            <Heading>{currency.name}</Heading>
            <P>Symbol: {currency.symbol}</P>
            <P>Num market pairs: {currency.num_market_pairs}</P>
            <P>Date added: {currency.date_added}</P>
            <ul>
                <P>Tags:</P>
                {currency.tags && currency.tags.map(t => <Li key={t}>{t}</Li>)}
            </ul>
            <P>Max supply: {currency.max_supply || 'None'}</P>
            <P>Circulating supply: {currency.circulating_supply || 'None'}</P>
            <P>Total supply: {currency.total_supply || 'None'}</P>
            <P>Platform: {currency.platform && currency.platform.name || 'None'}</P>
            <P>CMC rank: {currency.cmc_rank || 'None'}</P>
            {currency.quote && <ul>
                <P>Quote (USD):</P>
                <Li>Price: {currency.quote.USD.price}</Li>
                <Li>Volume 24h: {currency.quote.USD.volume_24h}</Li>
                <Li>Percent change 1h: {currency.quote.USD.percent_change_1h}</Li>
                <Li>Percent change 24h: {currency.quote.USD.percent_change_24h}</Li>
                <Li>Percent change 7d: {currency.quote.USD.percent_change_7d}</Li>
                <Li>Market cap: {currency.quote.USD.market_cap || 'None'}</Li>
            </ul>}
        </CurrencyContainer>
    )
}

export default CurrencyPage
