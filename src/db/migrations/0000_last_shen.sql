CREATE TABLE "chords" (
	"id" serial PRIMARY KEY NOT NULL,
	"song_id" integer NOT NULL,
	"name" text NOT NULL,
	"singername_bandname" text NOT NULL,
	"capo" text NOT NULL,
	"chords" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
