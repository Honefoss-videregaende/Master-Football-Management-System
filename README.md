# Master Football Management System
![Status](https://img.shields.io/badge/status-under%20development-yellow)

## Overview

The **Master Football Management System** is an open-source, educational web application designed to help students and developers practice managing football teams, players, games, and competitions. Developed as part of the **Information Technology program at Hønefoss Upper Secondary School in Norway**, the system offers hands-on experience in building a football management solution.

This project is actively under development, and new features and improvements are continuously added. The development process benefits from tools like GitHub Copilot, ensuring efficient coding and high-quality development practices.

**Disclaimer:**\
This project is intended for educational use only. While every effort is made to ensure the correctness and quality of the code, users should test the system thoroughly before implementing it in real-world scenarios. The authors are not liable for any issues or damages arising from its use.

## Features

- Manage football teams, players, and matches.
- Track player statistics and performance.
- Schedule and manage competitions and games.
- User authentication and role-based access control.
- Responsive design for desktop and mobile devices.

## Tech Stack

### Backend

- **Node.js** and **Express.js** for server-side development.
- **MySQL** database with **Sequelize ORM** for data management.
- **JWT** for user authentication.

### Frontend

- **React.js** (Functional components with Hooks) for building interactive user interfaces.
- **Axios** for API requests.
- **React Router** for seamless navigation.

### Styling

- **Bootstrap** for fast, responsive design.

### Testing

- **Jest** for backend testing.
- **React Testing Library** for frontend testing.

### Deployment

- **Docker** (optional) for containerized development.
- **Heroku** (for backend).
- **Netlify** (for frontend).

### Version Control

- **Git** for version control, hosted on platforms like **GitHub**, **GitLab**, or **Bitbucket**.

## Installation

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v14 or higher).
- **npm** (v6 or higher).
- **MySQL** (or another SQL database).

### Clone the Repository

To get started, clone the repository and navigate to the project directory:

```sh
git clone https://github.com/Honefoss-videregaende/Master-Football-Management-System.git
cd Master-Football-Management-System
```

### Backend Setup

1. Navigate to the **backend** directory:

```sh
cd backend
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the **backend** directory and configure your environment variables:

```ini
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

4. Ensure that **MySQL** is running and the database is created before running migrations:

```sh
npx sequelize-cli db:migrate
```

5. Start the backend server:

```sh
npm start
```

### Frontend Setup

1. Navigate to the **frontend** directory:

```sh
cd ../frontend
```

2. Install dependencies:

```sh
npm install
```

3. Start the frontend development server:

```sh
npm start
```

### Usage

Once both the backend and frontend servers are running, you can access the application by opening your browser and going to [http://localhost:3000](http://localhost:3000).

Use the provided credentials to log in and start managing football teams, players, and games.

## Contributing

We welcome contributions from the community! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

```sh
git checkout -b feature-name
```

3. Commit your changes:

```sh
git commit -m "Description of your changes"
```

4. Push your changes:

```sh
git push origin feature-name
```

5. Open a pull request to the main repository.


## License

This project is licensed under the **Apache-2.0** license. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

This project is part of the educational initiative at **Hønefoss Upper Secondary School's Information Technology program**. We thank all contributors who improve and expand this project, students, teachers/educators, and community members alike.

## Contact

For any questions or inquiries, please contact us at **[kamranhaz@bfk.no](mailto\:kamranhaz@bfk.no)**.