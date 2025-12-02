import express from 'express';
import dotenv from 'dotenv';
import { ENV } from './config/env.js';
import router from './routes/routes.js';
import job from './config/cron.js';
import cors from "cors";


import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = ENV.PORT;

if (ENV.NODE_ENV === 'production') {
  job.start();
}
app.use(cors()); 


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api', router);
app.use('/api/users', userRouter)

app.listen(PORT, () =>{
    console.log('Server is running on port:', PORT);
})

app.get('/api/health', (req, res) =>{
    res.status(200).json('Welcome to NepGuitar Backend!');
});
 