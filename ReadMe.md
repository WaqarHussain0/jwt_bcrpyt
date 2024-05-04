# JWT_BCRYPT

This project is a web application that focuses on providing secure user authentication and management functionalities. It incorporates various security measures such as user authentication with JSON Web Tokens (JWT) and password encryption using bcrypt. Additionally, the application implements CRUD (Create, Read, Update, Delete) operations for managing user data effectively.

## Features

- **User Authentication**: Implemented user authentication using JSON Web Tokens (JWT).
- **Password Encryption**: Utilized bcrypt package to securely encrypt user passwords before saving them into the database (PostgreSQL).
- **CRUD Operations**: Implemented complete CRUD (Create, Read, Update, Delete) operations for users.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js used for building APIs.
- **PostgreSQL**: SQL database used for storing user information.
- **JWT (JSON Web Tokens)**: Used for user authentication.
- **bcrypt**: Password hashing library used for secure storage of user passwords.
- **uuid**: Package for generating unique primary keys.

## Installation

1. Install dependencies:
   ```
   npm install OR npm i
   ```

## Usage

1. Set up a PostgreSQL database and configure the connection string in the `.env` file.
2. Start the server:
   ```
   npm run dev
   ```
3. Access the API endpoints using tools like Postman.

## API Endpoints

- **POST /user/signup**: Register a new user.
- **POST /user/login**: Login with existing credentials.
- **GET /user**: Get all users.
- **GET /user/:userID**: Get user by ID.
- **PUT /user/:userID**: Update user information.
- **DELETE /user/:userID**: Delete user.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Waqar Hussain

MERN Stack Developer  
📍 Lahore, Pakistan  
📧 Email: waqar105lgu.edu@gmail.com  
📱 WhatsApp: +92 317 4945496
