# Full Stack Articles App

A simple full-stack web application where users can view, add, edit, and delete articles.

The project was built to practice modern web development using React for the frontend and Node.js with Express for the backend.

## Features

* View articles
* Add new articles
* Edit existing articles
* Delete articles
* REST API backend
* MySQL database

## Tech Stack

Frontend

* React
* JavaScript
* CSS

Backend

* Node.js
* Express.js
* Sequelize

Database

* MySQL

## Project Structure

/client → React frontend
/server → Node.js backend

## Installation

Clone the repository

git clone https://github.com/beridzenika/full_stuck_project.git

Install dependencies

Frontend

cd client
npm install

Backend

cd server
npm install

## Database Setup

Create the database using the SQL file

mysql -u root -p < database.sql

Then configure your database credentials in the server.

Example configuration:

DB_HOST=localhost <br>
DB_USER=root <br>
DB_PASSWORD=password <br>
DB_NAME=blog_db <br>

The server models will define the table if necessary on it's own

## Running the Project

Start the backend server

cd server
npm start

Start the frontend

cd client
npm start

The application will run on:

Frontend
http://localhost:3000

Backend
http://localhost:3001


## API Endpoints

GET /posts → get all articles <br>
GET /posts/:id → get all articles <br>
POST /posts → create article <br>
PUT /posts/:id → update article <br>
DELETE /posts/:id → delete article 

## Future Improvements

* Authentication
* Comments
* Pagination
* Search functionality
