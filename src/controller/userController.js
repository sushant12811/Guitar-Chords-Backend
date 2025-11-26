
import {db} from '../config/db.js';
import {userTable} from '../db/schema.js';
import bcrypt from 'bcrypt';
import { generateToken } from "../auth/auth.js";
import { eq } from "drizzle-orm";


export async function registerUser(req, res) {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingUser = await db.select().from(userTable).where(eq(userTable.email, email));

if (existingUser.length > 0) {
    return res.status(409).json({ message: 'User already exists' });
}

        const hash = await bcrypt.hash(password, 10);
        const newUser = await db.insert(userTable).values({
            userName,
            email,
            password: hash, 
        }).returning();
          
        const token = generateToken(newUser[0]);

        res.status(201).json({ user: newUser[0], token, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export async function loginUser(req, res) {
    const { email, password } = req.body; // userName usually not needed for login

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const users = await db.select().from(userTable).where(eq(userTable.email, email));

        if (users.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = users[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = generateToken(user);

        res.status(200).json({ user, token, message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export async function logoutUser(req, res) {

   

    
}