import React from 'react'
import styled from 'styled-components';
import { useHistory, Redirect } from "react-router-dom";

const PaginationContainer = styled.div`
    padding: 1.5em 1.5em 0px;
    display: flex;
    justify-content: center;
`
const PaginateBtn = styled.p`
    display: inline-block;
    border: 1px solid #313c47;
    cursor: pointer;
    padding: 3px;
    margin: 5px;
    min-width: 33px;
    text-align: center;
    color: ${props => props.active ? 'white' : 'inherit'};
    background-color: ${props => props.active ? '#313c47' : 'inherit'};
    font-weight: ${props => props.active ? 'bold' : 'inherit'};
    &:hover {
        background-color: #313c47;
        color: white;
        font-weight: bold;
    }
`
const Dots = styled.span`
    font-size: 2em;
    cursor:pointer;
`

function Pagination(props) {
    const history = useHistory();
    const { numberOfPages, pageNumbers, pageNumber } = props

    const toPage = (pageNumber) => {
        history.push(`/${pageNumber}`)
    }
    const prevPage = () => {
        history.goBack()
    }
    if (pageNumber > numberOfPages) {
        return <Redirect to="/1" />
    }
    return (
        <PaginationContainer>
            {pageNumbers[0] !== 1 && (
                <>
                    <PaginateBtn onClick={() => toPage(1)}>
                        1
                    </PaginateBtn>
                    <Dots onClick={() => prevPage()}>...</Dots>
                </>
            )}
            {pageNumbers.map((number, index) => {
                return (
                    <PaginateBtn
                        key={index}
                        active={number === pageNumber}
                        onClick={() => toPage(number)}>
                        {number}
                    </PaginateBtn>
                )
            })}
            {pageNumbers[pageNumbers.length - 1] !== numberOfPages && (
                <>
                    <Dots onClick={() => toPage(pageNumber + 20)}>...</Dots>
                    <PaginateBtn onClick={() => toPage(numberOfPages)}>
                        {numberOfPages}
                    </PaginateBtn>
                </>
            )}
        </PaginationContainer>
    )
}

export default Pagination
