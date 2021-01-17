import './css/index.scss';

import fetchAPI from './fetch';

import User from './User';
import Destination from './Destination';
import Trip from './Trip';

let currentUser;

function getRandomIndex(dataset) {
  return Math.floor(Math.random() * dataset.length);
}; 

const users = fetchAPI.getData('travelers');
const trips = fetchAPI.getData('trips');

Promise.all([users, trips])
// .then(value => console.log(value[1].trips));
  .then(value => {
    generateUser(value[0].travelers)
  })

function generateUser(userData) {
  const randomIndex = getRandomIndex(userData);
  currentUser = new User(userData[randomIndex]);
  console.log(currentUser)
}
