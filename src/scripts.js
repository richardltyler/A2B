import './css/index.scss';

import fetchAPI from './fetch';

import User from './User';
import Trip from './Trip';

let currentUser;
let todaysDate = new Date();

function getRandomIndex(dataset) {
  return Math.floor(Math.random() * dataset.length);
}; 

const users = fetchAPI.getData('travelers');
const trips = fetchAPI.getData('trips');
const destinations = fetchAPI.getData('destinations');

Promise.all([users, trips, destinations])
  .then(value => {
    generateUser(value[0].travelers);
    const trips = generateTrips(value[1].trips, value[2].destinations);
    currentUser.getTripData(trips);
    currentUser.trips.forEach(trip => {
      createTripCard(trip);
    });
    displayLastYearsExpenses(currentUser.getCostOfYearsTravel(todaysDate));
  });


function generateUser(userData) {
  const randomIndex = getRandomIndex(userData);
  currentUser = new User(userData[1]);
  displayCurrrentUser();
}

function displayCurrrentUser() {
  const usernameDisplay = document.querySelector('.username');
  usernameDisplay.innerText = currentUser.getFirstName();
}


function generateTrips(tripData, destinationData) {
  const trips = tripData.map(trip => new Trip(trip));
  trips.forEach(trip => trip.getDestination(destinationData))

  return trips;
}

function createTripCard(trip) {
  const cardContainer = document.querySelector('.container');
  const cardTemplate = document.getElementById('card-template');
  const newTripCard = cardTemplate.content.cloneNode(true);
  const cardImage = newTripCard.querySelector('img.card--image');

  newTripCard.querySelector('article.trip-display--card').id = trip.id;
  newTripCard.querySelector('h4.card--title').innerText = trip.destination.destination;
  newTripCard.querySelector('h5.departure').innerText = trip.date;
  // newTripCard.querySelector('h5.duration').innerText = ;
  newTripCard.querySelector('h5.card--trip-status').innerText = trip.status.toUpperCase();
  cardImage.src = trip.destination.image;
  cardImage.alt = trip.destination.alt;

  cardContainer.appendChild(newTripCard);
}

function displayLastYearsExpenses(cost) {
  const costDisplay = document.getElementById('cost-display');
  costDisplay.innerText = cost;
}
