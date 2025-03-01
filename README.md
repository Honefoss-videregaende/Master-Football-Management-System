# Master Football Management System
![Status](https://img.shields.io/badge/status-under%20development-yellow)

## Overview

The Football Management System is an open-source, educational, and robust application designed for professional-level learning. It is part of a project running at the Hønefoss Upper Secondary School - IT (Norway). This system aims to provide students with hands-on experience in managing football teams, players, and matches.


**Disclaimer:**  
This project is for educational purposes only and is intended for learning and development in a classroom environment. The system is not intended for commercial use, and while every effort is made to ensure the correctness and quality of the code, users should verify and test the system for their own purposes before any practical use. The authors do not assume responsibility for any damages or issues that may arise from using this system.


## Features

- Manage football teams and players
- Schedule and manage matches
- Track player statistics and performance
- User authentication and authorization
- Responsive design for both desktop and mobile devices

## Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- JWT

### Frontend
- React.js (functional components with hooks)
- Axios
- React Router

### Styling
- Bootstrap for simplicity and responsiveness

### Testing
- Jest (backend)
- React Testing Library (frontend)

### Deployment
- Docker (optional)
- Heroku (backend)
- Netlify (frontend)

### Version Control
- Git
- GitHub/GitLab/Bitbucket

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL or any other SQL database

### Clone the Repository

```sh
git clone https://github.com/Honefoss-videregaende/Master-Football-Management-System.git
cd Master-Football-Management-System
```
### Backend Setup
- Navigate to the backend directory:
```sh
cd backend
```
- Install the dependencies:
```sh
npm install
```
- Create a .env file in the backend directory and add the following environment variables:

```markdown
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```
- Run the database migrations:
```sh
npx sequelize-cli db:migrate
```
- Start the backend server:
```sh
npm start
```
### Frontend Setup
- Navigate to the frontend directory:
```sh
cd ../frontend
```
- Install the dependencies:
```sh
npm install
```
- Start the frontend development server:
```sh
npm start
```
### Usage

- Open your browser and navigate to http://localhost:3000 to access the frontend.
- Use the provided credentials to log in and start managing football teams and matches.

### Contributing
We welcome contributions from the community. If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix:
```sh
git checkout -b feature-name
```
- Commit your changes:
```sh
git commit -m "Description of your changes"
```
- Push to the branch:
```sh
git push origin feature-name
```
- Create a pull request.

### License
This project is licensed under the Apache-2.0 license. See the LICENSE file for more details.

### Acknowledgements
This project is part of an educational initiative at the Hønefoss Upper Secondary School - IT (Norway). We would like to thank all the students and teachers who contributed to this project.

### Contact
For any questions or inquiries, please contact us at kamranhaz"bfk.no.

























