// Game Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Game = db.define('game', {
  date: {
  	type: Sequelize.DATE,
  	defaultValue: Sequelize.NOW, 
  	validate: {
  		isDate: true
  	},
  	winning_score: Sequelize.INTEGER
  }
});

module.exports = Game;
