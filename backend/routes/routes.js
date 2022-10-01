import express from 'express';

import { showCourses } from '../controllers/product.js';

const router = express.Router();

const baseUrl = '/api'

router.get('/', (req, res) => {
  res.send({message: 'API working'});
})

router.get(`${baseUrl}/courses`, showCourses);

export default router;