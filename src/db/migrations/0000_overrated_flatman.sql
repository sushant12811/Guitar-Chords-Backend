CREATE TABLE "chords" (
	"id" serial PRIMARY KEY NOT NULL,
	"song_id" integer NOT NULL,
	"name" text NOT NULL,
	"singername_bandname" text,
	"capo" text NOT NULL,
	"chords" text NOT NULL
);
