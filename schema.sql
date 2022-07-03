CREATE TABLE users
(
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email)
VALUES ("pratik@gmail.com"), ("aayush@gmail.com");