CREATE TABLE todolist(
    task_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    username VARCHAR(255),
    completed BOOLEAN
);

CREATE TABLE usernames(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);
