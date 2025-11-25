import express from 'express';
import dotenv from 'dotenv';
import { ENV } from './config/env.js';
import router from './routes/routes.js';
import job from './config/cron.js';

dotenv.config();

const app = express();
const PORT = ENV.PORT;

if(ENV.NODE_ENV === "production")job.start();

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () =>{
    console.log('Server is running on port:', PORT);
})

app.get('/api/health', (req, res) =>{
    res.status(200).json('Welcome to NepGuitar Backend!');
});
 