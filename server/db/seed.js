// Seed file
const { db, Team, Player, Game } = require('./index');

const teamData = [
  {
    name: 'Deathly Disaster',
    location: 'Australia'
  },
  {
    name: 'Groovy Gangsters',
    location: 'Brazil'
  },
  {
    name: 'Fiery Fanatics',
    location: 'Japan'
  }
];

const playerData = [
{
  name: 'Kookie Koala',
  number: 8,
  imgUrl: '/koala.jpg',
  teamId: 1
},
{
  name: 'Hungary Hippo',
  number: 18,
  imgUrl: '/hippo.jpg',
  teamId: 2
},
{
  name: 'Jazzy Jaguar',
  number: 88,
  imgUrl: '/jaguar.jpg',
  teamId: 3
}
];

db.sync()
  .then(() => {
    const arrTeamPromises = teamData.map(team => {
      return Team.create(team);
    });

    Promise.all(arrTeamPromises)
      .then(() => {
        return Promise.all(playerData.map(player => {
          return Player.create(player);
        }));
      })
      .then(()=> console.log('data created'))
      .catch(console.error)
  });

