import express from 'express';
import { addChords, deleteChords, getChords, getPublicChords, updateChords } from '../controller/controller.js';
import { authRequired } from '../middleware/middleware.js';

const router = express.Router();

router.get('/chords',authRequired,  getChords)
router.post('/add', authRequired,  addChords);
router.delete('/delete/:songId', authRequired, deleteChords) 
router.put('/update/:songId', authRequired, updateChords); 
router.get('/public/chords/:adminId', getPublicChords)

export default router;