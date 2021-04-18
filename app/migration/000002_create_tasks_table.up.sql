CREATE TABLE IF NOT EXISTS tasks(
   id serial PRIMARY KEY,
   uid VARCHAR (300) NOT NULL,
   title text NOT NULL,
   content text NOT NULL,
   created_at timestamp NOT NULL,
   updated_at timestamp NOT NULL
);

