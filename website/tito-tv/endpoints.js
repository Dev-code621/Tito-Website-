const router = require('express').Router()
const appIndex = __dirname + '/dist/index.html'
router.get('/', async (req, res) => {
    res.sendFile(appIndex)
})

router.get('/video', async (req, res) => {
    res.sendFile(appIndex)
})

router.get('/video/:video_id', async (req, res) => {
    res.sendFile(appIndex)
})

module.exports = router
