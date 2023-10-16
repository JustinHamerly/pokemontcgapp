const {startServer} = require('./src/server');
require('dotenv').config();
const PORT = process.env.PORT;
startServer(PORT);