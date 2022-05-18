import express from 'express';
import { getRoutes } from '../Controllers/routes.js';
const router = express.Router();

router.get('/', getRoutes)
// router.get('/info', getIDRoutes)
// router.post('/info', postRoutes)
// router.put('/info/:id', putRoutes)
// router.delete('/info/:id', deleteRoutes)


export default router;