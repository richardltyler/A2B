import './css/index.scss';

import fetchAPI from './fetch';

import User from './User';
import Destination from './Destination';
import Trip from './Trip';

function getRandomIndex() {
  return Math.floor(Math.random() * dataset.length); 
}; 
