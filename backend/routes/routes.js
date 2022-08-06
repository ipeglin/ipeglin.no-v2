import express from 'express';

import { showCourses } from '../controllers/product.js';
import { getAuthentication } from '../controllers/auth.js';

const router = express.Router();

const baseUrl = '/api'

router.get('/', (req, res) => {
  res.send({message: 'API working'});
})

router.get(`${baseUrl}/courses`, showCourses);

router.post(`${baseUrl}/auth/signin`, getAuthentication);

export default router;