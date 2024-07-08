CREATE TABLE IF NOT EXISTS "Students" (
	"Id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"notes" varchar[]
);
