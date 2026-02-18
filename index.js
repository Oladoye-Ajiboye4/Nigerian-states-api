const express = require('express');
const nigerianStates = require('./states');
const meta = require('./meta');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 6060;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/getState/byStateName/:name', (req, res) => {
  const stateName = req.params.name.toLowerCase();
  const state = nigerianStates.find(s => s.state_name.toLowerCase() === stateName);
  if (state) {
    res.status(200).json({ message: `Information about ${state.state_name} State`, data: state, status: true });
  } else {
    res.status(404).json({ message: "State not found", data: null, status: false });
  }
})

app.get('/getState/byCapital/:name', (req, res) => {
  const capitalName = req.params.name.toLowerCase();
  const state = nigerianStates.find(s => s.capital.toLowerCase() === capitalName);
  if (state) {
    res.status(200).json({ message: `Information about ${state.state_name} State`, data: state, status: true });
  } else {
    res.status(404).json({ message: "State not found", data: null, status: false });
  }
})

app.get('/', (req, res) => {
  res.status(200).json({ message: "List of Nigerian States", states: nigerianStates, status: true });
})

app.get('/meta', (req, res) => {
  res.status(200).json({ message: "Nigeria dataset metadata", meta, status: true });
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})