const express = require('express');
const nigerianStates = require('./states');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 6060; 

const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/states', (req, res) => {
  res.send(nigerianStates)
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})