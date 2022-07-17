import express from 'express';

import StudentController from '../controllers/studentControllers.js';
const router = express.Router();

router.get('/', StudentController.getAllDoc)

export default router