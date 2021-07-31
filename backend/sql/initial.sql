DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    task TEXT,
    t_date TEXT,
    t_time TEXT,
    description TEXT,
    CONSTRAINT C FOREIGN KEY(user_id) REFERENCES users(id)
)