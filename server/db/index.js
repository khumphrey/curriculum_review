// Main database file

// Required files
const db = require('./_db');
const Team = require('./team');
const Player = require('./player');
const Game = require('./game');

// Relations
Player.belongsTo(Team);
Team.hasMany(Player);

Team.belongsToMany(Game, { through: 'team_games', foreignKey: 'teamId' });
Game.belongsToMany(Team, { through: 'team_games', as: 'participants', foreignKey: 'gameId' });

Game.hasOne(Team, {as: 'winner'});

module.exports = {
  db,
  Team,
  Player,
  Game
};