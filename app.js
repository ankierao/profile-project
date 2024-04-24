const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const routes = require('./src/routes');
const { connectDb } = require('./src/models');

app.use(cors());
app.use(express.json());

app.use('/',routes);

connectDb(); 

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`);
});
