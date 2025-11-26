import express from 'express';
import { addChords, deleteChords, getChords } from '../controller/controller.js';
import { authRequired } from '../middleware/middleware.js';

const router = express.Router();


router.post('/add', authRequired,  addChords);
router.get('/chords', getChords)
router.delete('/delete/:songId', authRequired, deleteChords)  

export default router;