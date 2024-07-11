module.exports = {
  mongoURI: 'mongodb+srv://admin:vQLR9HlZZEpc9DCV@drdisccluster.v8dront.mongodb.net/?retryWrites=true&w=majority&appName=DrDiscCluster',
  jwtSecret: 'hello',
  backendURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000'
};