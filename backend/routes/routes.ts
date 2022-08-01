import express from 'express';

import { showCourses } from '../controllers/product';

const router = express.Router();

router.get('/courses', showCourses);

export default router;