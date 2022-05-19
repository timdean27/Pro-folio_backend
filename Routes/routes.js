const express = require('express');
const setFirstShema = require('../Models/projectSchema');
//import { getRoutes } from '../Controllers/routes.js';
const router = express.Router();

router.get('/', (req, res) =>{
    
        res.send("Back end port 4000")
    });

//home/json

router.get('/json', async (req, res) => {
        try {
            res.set('Access-Control-Allow-Origin', '*');
            res.json(await setFirstShema.find({}));
        } catch (error) {
            res.status(400).json(error);
        }
    })

// router.get('/info', getIDRoutes)
// router.post('/info', postRoutes)
// router.put('/info/:id', putRoutes)
// router.delete('/info/:id', deleteRoutes)


module.exports = router