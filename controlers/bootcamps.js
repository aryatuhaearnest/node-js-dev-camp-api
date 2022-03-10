// @desc Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show all bootcamps` })

}

// @desc Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access  Public
exports.getSingleBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show  bootcamp ${req.params.id}` })


}


// @desc Add new bootcamps
// @route  POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `add  bootcamp` })


}

// @desc update bootcamp
// @route  PATCH /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update  bootcamp ${req.params.id}` })


}

// @desc update bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete  bootcamp ${req.params.id}` })


}