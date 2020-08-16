const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

const { getAllCurrencies, getCurrencyById, getPage } = require('./controller')

app.use(cors())

app.get("/", getAllCurrencies)
app.get("/:pageNumber", getPage)
app.get("/currency/:id", getCurrencyById)

app.listen(PORT, () => {
    console.log('Сервер запущен. Порт: ' + PORT)
})

// let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
// let data
// const rp = require('request-promise');
// const requestOptions = {
//     method: 'GET',
//     uri: url,
//     qs: {
//         'start': '1',
//         'limit': '5000',
//         'convert': 'USD'
//     },
//     headers: {
//         'X-CMC_PRO_API_KEY': '8e7bb7e4-d210-4562-9331-59fb278985b0'
//     },
//     json: true,
//     gzip: true
// };

// rp(requestOptions).then(response => {
//     console.log('API call response:', response);
//     data = response
// }).catch((err) => {
//     console.log('API call error:', err.message);
// });