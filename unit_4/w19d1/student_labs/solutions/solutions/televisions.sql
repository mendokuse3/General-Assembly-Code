-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it
DROP TABLE television;

-- Create a televisions table
CREATE TABLE television ( id serial, model_name varchar(20) );

--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url


-- Insert 4 televisions into the tv_models table
INSERT INTO television (model_name) VALUES ( 'Sony WOW' );
INSERT INTO television (model_name) VALUES ( 'Sony 2' );

-- Select all entries from the tv_models table
SELECT * FROM television;


-- TO RUN: psql -f televisions.sql television

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns
