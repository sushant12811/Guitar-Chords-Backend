import express from 'express';
import { addChords, deleteChords, getChords } from '../controller/controller.js';

const router = express.Router();


router.post('/add', addChords);
router.get('/chords', getChords)
router.delete('/delete/:songId',deleteChords)  

export default router;