import express from 'express';
import dotenv from 'dotenv';
import { ENV } from './config/env.js';
import { db } from './config/db.js';
import { chordsTable } from './db/schema.js';
import router from './routes/routes.js';

dotenv.config();

const app = express();
const PORT = ENV.PORT;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () =>{
    console.log('Server is running on port:', PORT);
})

app.get('/api/health', (req, res) =>{
    res.status(200).json('Welcome to NepGuitar Backend!');
});
 