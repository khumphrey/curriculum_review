// Main application

// Required libraries
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

// Required files
const { db } = require('./db');
const routerAPI = require('./api');

// App creation
const app = express();
const PORT = 1337;

// Middleware

//   Logging
app.use(volleyball);

//   Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file serving
app.use(express.static('public'));

// Routers
app.use('/api', routerAPI);

const validFrontendRoutes = ['/', '/players', '/teams', '/games'];

const indexPath = path.join(__dirname, '../public', 'index.html');

validFrontendRoutes.forEach(stateRoute => {
  app.get(stateRoute, (req, res) => res.sendFile(indexPath) );
});

// Error logging middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// Start the server
app.listen(PORT, () => {
  console.log('Connecting to the database...');
  db.sync({ force: false })
    .then(() => {
      console.log(`Connected to database and anxiously awaiting requests on port ${PORT}`);
    });
});
