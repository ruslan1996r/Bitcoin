const { Worker } = require('worker_threads')
const coinMarket = require('./db.json')

exports.getAllCurrencies = (req, res) => {
    const coinNames = coinMarket.data.data.map(c => {
        return c.name
    })
    res.send({ coinNames })
}

exports.getCurrencyById = (req, res) => {
    const worker = new Worker('./workers/getByIdWorker.js', {
        workerData: { id: req.params.id }
    })
    worker.on('message', (currency) => res.send({ currency }));
    worker.on('error', (error) => res.send({ error }));
    // worker.on('exit', (code) => console.log('code', code))
}

exports.getPage = (req, res) => {
    const worker = new Worker('./workers/getPageWorker.js', {
        workerData: { pageNumber: req.params.pageNumber }
    })
    worker.on('message', (page) => res.send({ page }));
    worker.on('error', (error) => res.send({ error }));
}