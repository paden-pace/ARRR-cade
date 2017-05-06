CREATE DATABASE arcard_db;

USE arcade_db;

CREATE TABLE players_scores(
    id INT NOT NULL AUTO_INCREMENT,
    playerName VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    simonHiScore INT(10) NOT NULL DEFAULT 0,
    pogNumOfWins INT(10) NOT NULL DEFAULT 0,
    blackJackHiScore INT(10) NOT NULL DEFAULT 0,
    rpsNumOfWins INT(10) NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

