const express = require('express');
const cors = require('cors');
const { fetchAll } = require('./cardHandlers');

const app = express();
app.use(express.json());
app.use(cors());


app.get('/all', fetchAll);

const startServer = port => {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
}

module.exports = {
  startServer
}
