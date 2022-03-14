BEGIN;

DROP TABLE IF EXISTS users, commints, posts CASCADE;

CREATE TABLE users (
  id SERIAL  PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(200) unique,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL  PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  post TEXT NOT NULL,
  communities VARCHAR(125),
  vote INT ,
  date date ,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE commints (
  id SERIAL  PRIMARY KEY,
  commint TEXT NOT NULL,
  date date ,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES posts(id)
);

COMMIT;
