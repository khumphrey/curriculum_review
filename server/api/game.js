// Game Router

// Required libraries
const gameRouter = require('express').Router();
module.exports = gameRouter;

// Required files
const { Game, Team } = require('../db');

// Routes
gameRouter.get('/', (req, res, next) => {
  Game.findAll()
    .then(foundGames => res.send(foundGames))
    .catch(next);
});

gameRouter.post('/', (req, res, next) => {
  Game.create(req.body)
    .then(createdGame => res.send(createdGame))
    .catch(next);
});

gameRouter.get('/:gameId', (req, res, next) => {
  Game.findById(req.params.gameId)
    .then(foundGame => res.send(foundGame))
    .catch(next);
});
