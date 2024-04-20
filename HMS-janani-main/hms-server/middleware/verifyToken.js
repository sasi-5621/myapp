const jwt = require('jsonwebtoken');
require('dotenv').config(); // Import dotenv
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: 'Config/.env' }); // Load environment variables from config/.env file

const secretKey = process.env.JWT_SECRET;

// Middleware for verifying JWT tokens
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization'); // Assuming the token is in the Authorization header

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey); // Use the secretKey loaded from environment variables
    req.user = decoded; // Set the user information in req.user
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
  }
};

module.exports = verifyToken;
