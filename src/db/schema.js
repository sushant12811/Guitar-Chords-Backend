import  {pgTable, serial, text, integer} from 'drizzle-orm/pg-core';

export const chordsTable = pgTable('chords',{
    id: serial('id').primaryKey(),
    songID: integer('song_id').notNull(),
    name: text('name').notNull(),
    singerName_BandName: text('singername_bandname').notNull(),
    capo: text('capo').notNull(),
    chords: text('chords').notNull(),
});

export const userTable = pgTable('users',{
    id: serial('id').primaryKey(),
    userName: text('username').notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
});