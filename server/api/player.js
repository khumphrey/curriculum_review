// Player Routes

// Required libraries
const playerRouter = require('express').Router();
module.exports = playerRouter;

// Required files
const { Player, Team } = require('../db');

// Routes

//  Routing middleware
playerRouter.param('playerId', (req, res, next, id) => {
  Player.findById(id, {
    include: [Team]
  })
  .then(foundPlayer => {
    req.player = foundPlayer;
  })
  .catch(next);
})

// localhost:1337/api/player?name=bob
playerRouter.get('/', (req, res, next) => {
  const query = req.query || {};
  Player.findAll(query)
    .then(foundPlayers => res.send(foundPlayers))
    .catch(next);
});

playerRouter.post('/', (req, res, next) => {
  Player.create(req.body)
    .then(createdPlayer => res.status(201).send(createdPlayer))
    .catch(next);
});

playerRouter.get('/:playerId', (req, res) => res.send(req.player));

playerRouter.put('/:playerId', (req, res, next) => {
  req.player.update(req.body)
    .then(updatedPlayer => res.send(updatedPlayer))
    .catch(next);
});

playerRouter.delete('/:playerId', (req, res, next) => {
  req.player.destroy()
    .then(() => res.sendStatus(204))
    .catch(next);
});

playerRouter.put('/:playerId/addTeam/:teamId', (req, res, next) => {
  req.player.setTeam(req.params.teamId)
    .then(() => res.end())
    .catch(next);
});
