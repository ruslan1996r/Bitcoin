const { workerData, parentPort } = require('worker_threads')
const coinMarket = require('../db.json')

function findById(curId) {
    const currency = coinMarket.data.data.find(cur => cur.id === +curId)
    return currency
}

const result = findById(workerData.id)
parentPort.postMessage(result)