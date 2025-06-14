//Setup Sequelize connection using environment variables
// This code connects to a MySQL database using Sequelize ORM.

import { Sequelize } from 'sequelize'; // Import Sequelize from the sequelize package
import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file


// Create a new Sequelize instance with database connection details
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306, // Default MySQL port
  }
);

export default sequelize;
// This code sets up a connection to a MySQL database using Sequelize ORM.