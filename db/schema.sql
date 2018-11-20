DROP DATABASE IF EXISTS cheapDrugs;

CREATE DATABASE cheapDrugs;

-- Table Outlines - will build out in /Models

-- USE cheapDrugs

-- CREATE TABLE `userProfile` (
--     id int NOT NULL AUTO_INCREMENT, 
--     firstName varchar(250) NOT NULL, 
--     lastName varchar(250) NOT NULL, 
--     email varchar(320) NOT NULL, 
--     userPassword varchar (255) NOT NULL,
--     zipcode varchar(5) NOT NULL, 
--     time_created DATETIME NOT NULL, 
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE `pharmacy_prefrences` (
--     pharmacyID int NOT NULL AUTO_INCREMENT, 
--     pharmacy1 varchar(250) NOT NULL, 
--     pharmacy2 varchar(250) NULL, 
--     pharmacy3 varchar(250) NULL,
--     PRIMARY KEY (pharmacyID),
--     FOREIGN KEY (userProfile) 
--         REFERENCES userProfile(id) 
--             ON DELETE CASCADE 
            
-- ); 

-- CREATE TABLE `search_history` ( 
--     drugID int NOT NULL AUTO_INCREMENT, 
--     drugName varchar(320) NOT NULL, 
--     PRIMARY KEY (drugID),
--     FOREIGN KEY (userProfile) 
--         REFERENCES userProfile(id)
--             ON DELETE CASCADE

-- );

