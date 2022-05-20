const express = require('express');
const setFirstShema = require('../Models/projectSchema');
const {getRoutes , getFindAll } = require('../Controllers/routes.js')
const router = express.Router();



router.get('/info', getRoutes)

// this is on localhost:4000/home/json
router.get('/json', getFindAll)

// router.get('/info', getByID)
// router.post('/info', postRoutes)
// router.put('/info/:id', putRoutes)
// router.delete('/info/:id', deleteRoutes)


module.exports = router