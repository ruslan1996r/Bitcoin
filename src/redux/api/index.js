import superagent from "superagent"

export default class Api {
    static getCurrencyById = async (id) => {
        const res = await superagent.get(`http://localhost:5000/currency/${id}`)
        return res.body.currency
    }
    static getPage = async (pageNumber) => {
        const res = await superagent.get(`http://localhost:5000/${pageNumber}`)
        return res.body.page
    }
}