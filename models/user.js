// UseR model for the EventEase Management System
// This model defines the structure of the User table in the database
// It includes fields for name, email, password, and role
// It uses Sequelize ORM for database interactions

import { DataTypes } from 'sequelize'; // Import DataTypes from Sequelize
import sequelize from '../config/database.js'; // Import the Sequelize instance from the database configuration


// Define the User model with its attributes and constraints
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'organizer', 'guest'),
    defaultValue: 'organizer', // Default role is 'organizer'
  },
});



export default User;
