// Team Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Team = db.define('team', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	validate: {
  		notEmpty: true
  	}
  },
  location: Sequelize.STRING
});

module.exports = Team;

