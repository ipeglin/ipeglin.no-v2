import express from 'express';
import cors from 'cors';
import Router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

// init express
const app = express();
const port = process.env.EXPRESS_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(Router);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));