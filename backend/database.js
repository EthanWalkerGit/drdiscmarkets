require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = 'your_mongodb_connection_string_here';
const options = {
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

// Basic in-memory cache
const cache = {};

// Set cache
function setCache(key, value, ttl) {
  const expiry = ttl ? Date.now() + ttl : null;
  cache[key] = { value, expiry };
}

// Get cache
function getCache(key) {
  const item = cache[key];
  if (item) {
    if (!item.expiry || item.expiry > Date.now()) {
      return item.value;
    }
    // If the item is expired, delete it
    if (item.expiry && item.expiry <= Date.now()) {
      delete cache[key]; // Delete expired cache item
      return null;
    }
  }
  return null;
}

// Optionally, implement delete cache and other cache management functions

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connectDB, setCache, getCache };