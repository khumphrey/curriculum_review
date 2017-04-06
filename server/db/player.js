// Player Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Player = db.define('player', {
  name: Sequelize.STRING,
  imgUrl: Sequelize.TEXT,
  number: {
  	type: Sequelize.INTEGER,
  	validate: {
  		min: 0,
  		max: 100
  	}
  }
});

module.exports = Player;
