import express from 'express';
import { getRoutes } from '../Controllers/routes.js';
const router = express.Router();

router.get('/', getRoutes)

export default router;