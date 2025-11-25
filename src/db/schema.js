import  {pgTable, serial, text, integer} from 'drizzle-orm/pg-core';

export const chordsTable = pgTable('chords',{
    id: serial('id').primaryKey(),
    songID: integer('song_id').notNull(),
    name: text('name').notNull(),
    singerName_BandName: text('singername_bandname'),
    capo: text('capo').notNull(),
    chords: text('chords').notNull(),
});