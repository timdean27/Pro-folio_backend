const express = require('express');
const setFirstShema = require('../Models/projectSchema');
const {getRoutes , getFindAll, getByID ,postRoutes ,putRoutes,deleteRoutes} = require('../Controllers/routes.js')
const router = express.Router();



router.get('/', getRoutes)

// this is on localhost:4000/home/json
router.get('/json', getFindAll)

router.get('/json', getByID)
router.post('/json', postRoutes)
router.put('/json/:id', putRoutes)
router.delete('/json/:id', deleteRoutes)


module.exports = router