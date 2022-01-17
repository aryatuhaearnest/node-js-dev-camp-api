const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({ success: true, msq: `show all bootcamps` })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msq: `show  bootcamp ${req.params.id}` })
})

router.put('/', (req, res) => {
    res.status(200).json({ success: true, msq: `add  bootcamp` })
})

router.patch('/:id', (req, res) => {
    res.status(200).json({ success: true, msq: `update  bootcamp ${req.params.id}` })
})


router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msq: `delete  bootcamp ${req.params.id}` })
})

module.exports =router;