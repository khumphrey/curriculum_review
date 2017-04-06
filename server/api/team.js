// Team Routes

// Required libraries
const teamRouter = require('express').Router();
module.exports = teamRouter;

// Require files
const { Team, Player } = require('../db');

// Routes
teamRouter.get('/', (req, res, next) => {
  Team.findAll({
    include: [Player]
  })
  .then(foundTeams => res.send(foundTeams))
  .catch(next);
});

teamRouter.post('/', (req, res, next) => {
  Team.create(req.body)
    .then(createdTeam => res.send(createdTeam))
    .catch(next);
});

teamRouter.get('/:teamId', (req, res, next) => {
  Team.findById(req.params.teamId, {
    // auto-populating references!
    include: [Player]
  })
  .then(foundTeam => res.send(foundTeam))
  .catch(next);
});
