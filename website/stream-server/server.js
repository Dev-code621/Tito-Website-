process.env.DEBUG = 'mediasoup*'
const {
    types,
    version,
    observer,
    createWorker,
    getSupportedRtpCapabilities,
    parseScalabilityMode
} = require("mediasoup")

const cors = require('cors')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const mongoose = require('mongoose')
const dbconnect = require("./mongodb.env")

var cron = require('node-cron');
const scraping =  require('./src/scraping');

app.use(express.static('public'));
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

console.log('Mediasoup Version', version)

observer.on('newworker', async worker => {
    console.log('New worker: [pid:%d]', worker.pid)
    const endpoints = require('./src/endpoints')({ worker });
    app.set('view engine', 'ejs')
    app.use('/', endpoints)

    /* let systemUsageLogger = setInterval(() => {

    }, 5000) */

    worker.observer.on('close', error => {
        console.error('mediasoup worker died!: %o', error)
    })
})

let loglevel = 'warn'
if (process.env.NODE_ENV == 'development') {
    loglevel = 'error'
}

const worker = createWorker({
    loglevel,
    logTags: [
        'ice',
        'dtls',
        'rtp',
        'srtp',
        'rtcp',
        'rtx',
        'bwe',
        'score',
        'simulcast',
        'svc',
        'sctp',
        'message'
    ],
    rtcMinPort: 55000,
    rtcMaxPort: 55020
}) 

mongoose.connect(dbconnect, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    const db = mongoose.connection 

    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    
    server.listen(8342, async () => {
        console.log(`listening at 8342`)
    })
})
.catch(error => console.log(error));
// cron.schedule('*/30 * * * *',async () => {    
   
//     await scraping.index()
 
// });

// var count = true
// cron.schedule('* * * * * *',async () => {    
//     if(count){
//         count = false;
//         await scraping.index()
//     }
     
// });


