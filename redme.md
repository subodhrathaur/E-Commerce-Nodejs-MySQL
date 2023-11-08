# Node.js E-Commerce Application

## Project Structure

The project follows a common structure for a Node.js application. Here's an overview of the directory structure:

- **config**: Contains configuration files (e.g., database configuration).
- **controllers**: Handles application logic and routes.
- **models**: Defines data models for the application.
- **routes**: Defines API endpoints and routes.
- **views**: Contains HTML views (if applicable).
- **public**: Stores static files (e.g., styles, scripts, images).
- **middleware**: Houses custom middleware functions.
- **tests**: Includes test scripts and test data.
- **node_modules**: Contains project dependencies (installed libraries).
- **app.js**: The main application entry point.
- **package.json**: Lists project dependencies and metadata.
- **README.md**: Project documentation (you are here).

...

## Libraries and Dependencies

The project uses several Node.js libraries to implement its functionality. Here are some of the key libraries and their purposes:

- **Express**: A popular web application framework for creating APIs and handling routes.
- **Sequelize**: An ORM for handling database operations (e.g., MySQL).
- **JWT**: JSON Web Tokens for user authentication and authorization.
- **Bcrypt**: Used for password hashing and validation.
- **Express Session**: Middleware for managing user sessions.
- **Cors**: Middleware for enabling cross-origin resource sharing.
- **Dotenv**: Zero-dependency module for loading environment variables.
- **Other Dependencies**: Various other libraries may be used for specific tasks (e.g., payment processing, image upload).

You can find the complete list of project dependencies in the `package.json` file.

### List of Libraries and Versions

- **bcrypt**: Version 5.1.1
- **cors**: Version 2.8.5
- **dotenv**: Version 16.3.1
- **express**: Version 4.18.2
- **express-session**: Version 1.17.3
- **jsonwebtoken**: Version 9.0.2
- **mysql2**: Version 3.6.3
- **nodemon**: Version 3.0.1
- **sequelize**: Version 6.34.0

These libraries play a crucial role in your application's functionality, including security, route handling, database interaction, authentication, and development workflow. You can use the provided versions to ensure compatibility and maintain the stability of your application.

...

You can find the complete list of project dependencies in the `package.json` file.

## Running the Node.js App

To run the Node.js E-Commerce application, follow these steps:

1. **Install Dependencies**:
   Open a terminal in the project directory and run the following command to install project dependencies:

   ```bash
   npm install
