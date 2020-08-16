const { workerData, parentPort } = require('worker_threads')
const coinMarket = require('../db.json')

function getPage(pageNumber) {
    const currencies = coinMarket.data.data
    const portion = 20
    const page = [...currencies.splice(((portion * pageNumber) - portion), portion)]

    const numberOfPages = Math.ceil(currencies.length / portion)
    const pageNumbers = []
    for (let i = 1; i <= portion; i++) {
        if (i + (+pageNumber - 1) <= numberOfPages) {
            pageNumbers.push(i + (+pageNumber - 1))
        }
    }

    return { page, pageNumbers, numberOfPages }
}

const result = getPage(workerData.pageNumber)
parentPort.postMessage(result)