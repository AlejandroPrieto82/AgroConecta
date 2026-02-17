const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/HealthRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use('/health', healthRoutes);

app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(`[Error] ${err.message}`);
  res.status(500).json({ status: 'error', message: 'Internal server error' });
});

module.exports = app;
