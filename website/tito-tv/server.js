const express = require('express')
const cors = require('cors')
const endpoints = require('./endpoints')
var xFrameOptions = require('x-frame-options')
const helmet = require('helmet');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use('/', endpoints)
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));


app.listen(8080, () => {
    console.log(`tito.tv server listening at port 8080` )
})