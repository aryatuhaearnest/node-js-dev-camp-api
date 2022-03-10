const express = require('express')

const {
    getBootcamps, 
    getSingleBootcamps, 
    updateBootcamp, 
    deleteBootcamp, 
    createBootcamp
} = require('../controlers/bootcamps')

const router = express.Router()

router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getSingleBootcamps).put(updateBootcamp).delete(deleteBootcamp)


module.exports = router;