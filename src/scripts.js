import './css/index.scss';

import fetchAPI from './fetch';

import User from './User';
import Destination from './Destination';
import Trip from './Trip';

const bookingButton = document.getElementById('booking-button');
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
    addDestinationOptions(value[2].destinations);
  })
  .then(bookingButton.addEventListener('click', getCostEstimate));

function generateUser(userData) {
  const randomIndex = getRandomIndex(userData);
  currentUser = new User(userData[randomIndex]);
  displayCurrrentUser();
}

function displayCurrrentUser() {
  const usernameDisplay = document.querySelector('.username');
  usernameDisplay.innerText = currentUser.name.split(' ')[0];
  usernameDisplay.id = currentUser.id;
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
  newTripCard.querySelector('h5.duration').innerText = `${trip.duration} days`;
  newTripCard.querySelector('h5.card--trip-status').innerText = trip.status.toUpperCase();
  cardImage.src = trip.destination.image;
  cardImage.alt = trip.destination.alt;

  cardContainer.appendChild(newTripCard);
}

function displayLastYearsExpenses(cost) {
  const costDisplay = document.getElementById('cost-display');
  costDisplay.innerText = cost;
}

function addDestinationOptions(destinationData) {
  const destinationList = destinationData.map(location => location.destination).sort();

  createNewOptions(destinationList);
}

function createNewOptions(optionsList) {
  const dropdown = document.getElementById('destinations-dropdown');

  optionsList.forEach(option => {
    const newOptionElement = document.createElement("option");
    newOptionElement.value = option;
    newOptionElement.innerText = option;

    dropdown.appendChild(newOptionElement);
  })
}

function getCostEstimate() {
  Promise.resolve(destinations)
  .then(destinationsData => {
    const estimatedCost = getTotalCost(destinationsData.destinations);

    displayTripCostEstimate(estimatedCost);
  })
}

function getTotalCost(destinationData) {
  const destination = getDestination(destinationData);

  return (getLodgingCost(destination) + getFlightCost(destination)) * 1.1;
} 

function getDestination(destinationData) {
  const destinationChoice = document.getElementById('destinations-dropdown').value;

  return destinationData.find(destination => destination.destination === destinationChoice);
}

function getFlightCost(destination) {
  const numberOfTravelers = document.getElementById('travelers-input');

  return destination.estimatedFlightCostPerPerson * numberOfTravelers;
}

function getLodgingCost(destination) {
  const duration = document.getElementById('duration-input').value;

  return duration * destination.estimatedLodgingCostPerDay;
}

function displayTripCostEstimate(estimatedCost) {
  const bookingArea = document.querySelector('.sidebar--booking');
  const estimateDisplays = bookingArea.querySelectorAll('h6');
  estimateDisplays.forEach(element => element.remove());


  const newEstimateDisplay = document.createElement('h6');
  newEstimateDisplay.innerText = `$${estimatedCost}`;

  bookingArea.appendChild(newEstimateDisplay);
}


