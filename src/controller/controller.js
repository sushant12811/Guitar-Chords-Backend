import {db} from '../config/db.js';
import {chordsTable} from '../db/schema.js';

export async function getChords (req, res){
 try {
        const chords = await db.select().from(chordsTable);
        res.status(200).json(chords);  
    } catch (error) {
        console.error('Error fetching chords:', error);
        res.status(500).json({message: 'Internal server error'});
        
    }
}

export async function addChords(req, res){
try{
        const {songID, name, capo, chords, } = req.body;

        if(!songID || !name || !capo || !chords){
            return res.status(400).json({message: 'All fields are required'});
        }
        const newChordsTable = await db.insert(chordsTable).values({
            songID,
            name,
            capo,
            chords,
        }).returning();
        res.status(201).json(newChordsTable[0], {message: 'Chord added successfully'});
    }catch (error) {
        console.error('Error adding chord:', error);
        res.status(500).json({message: 'Internal server error'});
        
    }
}

export async function deleteChords(req, res){
try {
        const{songId} = req.params;
        await db.delete(chordsTable).where(eq(chordsTable.songID, parseInt(songId)));
        res.status(200).json({message: 'Chord deleted successfully'});
        
    } catch (error) {
        console.error('Error deleting chord:', error);
        res.status(500).json({message: 'Internal server error'});   
    }
}
