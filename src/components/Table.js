import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const TableContainer = styled.div`
    padding: 1.5em;
    font-size: 14px;
`
const TrHead = styled.tr`
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    background: #313c47;
`
const TrBody = styled.tr`
    cursor: pointer;
    text-align: center;
    &:hover {
        background-color: #313c47;
        color: white;
    }
`

function Table({ currencies }) {
    const history = useHistory();
    const toCurrency = (curId) => {
        history.push(`/currency/${curId}`)
    }
    return (
        <TableContainer>
            <table>
                <thead>
                    <TrHead>
                        <th>Currency</th>
                        <th>Capitalization</th>
                        <th>Price</th>
                        <th>Market Size</th>
                        <th>Daily Change</th>
                    </TrHead>
                </thead>
                <tbody>
                    {currencies.map(cur => {
                        return (
                            <TrBody key={cur.id} onClick={() => toCurrency(cur.id)}>
                                <td>{cur.name}</td>
                                <td>{cur.capitalization}</td>
                                <td>{cur.price}</td>
                                <td>{cur.marketSize}</td>
                                <td>{cur.dailyChange}</td>
                            </TrBody>
                        )
                    })}
                </tbody>
            </table>
        </TableContainer>
    )
}

export default Table
