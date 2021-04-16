CREATE TABLE IF NOT EXISTS users(
   id VARCHAR (300) PRIMARY KEY NOT NULL,
   name VARCHAR (50) NOT NULL,
   email VARCHAR (300) UNIQUE NOT NULL,
   created_at timestamp NOT NULL,
   updated_at timestamp NOT NULL
);

