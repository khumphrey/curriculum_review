// Database index

// Required libraries
const Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/curriculum_review', {
  logging: false
});

module.exports = db;
