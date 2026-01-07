CREATE DATABASE QuizWebsiteDB_Final;
USE QuizWebsiteDB_Final;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE quizzes (
    quiz_id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_name VARCHAR(50)
);

CREATE TABLE questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    question_text VARCHAR(200)
);

CREATE TABLE answers (
    answer_id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT,
    answer_text VARCHAR(200)
);

INSERT INTO users (name, email) VALUES ('Lakshmi', 'lakshmi@gmail.com');
INSERT INTO users (name, email) VALUES ('Nandini', 'nandini@gmail.com');

INSERT INTO quizzes (quiz_name) VALUES ('General Knowledge');

INSERT INTO questions (quiz_id, question_text) VALUES (1, 'What is the capital of India?');
INSERT INTO questions (quiz_id, question_text) VALUES (1, 'What is 2 + 2?');

INSERT INTO answers (question_id, answer_text) VALUES (1, 'New Delhi');
INSERT INTO answers (question_id, answer_text) VALUES (2, '4');

SELECT * FROM users;
SELECT * FROM quizzes;
SELECT * FROM questions;
SELECT * FROM answers;

SELECT quizzes.quiz_name, questions.question_text, answers.answer_text
FROM quizzes
INNER JOIN questions ON quizzes.quiz_id = questions.quiz_id
INNER JOIN answers ON questions.question_id = answers.question_id;
