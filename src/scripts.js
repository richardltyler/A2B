// WEBPACK IMPORTS
import './css/index.scss';
import fetchAPI from './fetch';
import User from './User';
import Trip from './Trip';

// QUERY SELECTORS
const costButton = document.getElementById('cost-button');
const bookingButton = document.getElementById('booking-button');
const loginButton = document.getElementById('login-button');

// EVENT LISTENERS
loginButton.addEventListener('click', checkUserName);
bookingButton.addEventListener('click', bookTrip);

// GLOBAL VARIABLES
let currentUser;
let allTrips;
let allDestinations;
let todaysDate = new Date();

// FETCH DATA
// // GET
function getData(userID) {
  const fetchData = [
    fetchAPI.getData('travelers'), 
    fetchAPI.getData('trips'), 
    fetchAPI.getData('destinations')
  ];

  Promise.all(fetchData)
    .then(value => {
      generateUser(value[0], userID);
      const trips = generateTrips(value[1], value[2]);
      currentUser.getTripData(trips);
      clearCards();
      currentUser.trips.forEach(trip => {
        createTripCard(trip);
      });
      displayLastYearsExpenses(currentUser.getCostOfYearsTravel(todaysDate));
      addDestinationOptions(value[2].destinations);
    })
    .then(costButton.addEventListener('click', getCostEstimate));
}

// // POST
function bookTrip() {
  const numberOfTravelers = document.getElementById('travelers-input').value;
  const duration = document.getElementById('duration-input').value;
  const selectedDate = document.getElementById('date-input').value;
  const estimatedCost = document.getElementById('estimatedCostDisplay');

  if (numberOfTravelers && duration && selectedDate && estimatedCost) {
    const optionsBody = {
        id: getTripId(), 
        userID: currentUser.id, 
        destinationID: getDestinationOptionID(), 
        travelers: numberOfTravelers, 
        date: formatDate(selectedDate),
        duration: duration, 
        status: 'pending', 
        suggestedActivities: []
      };

    fetchAPI.postData(optionsBody)
    .then(getData(currentUser.id));
  }
}

// EVENT HANDLERS AND HELPER FUNCTIONS
function hideElement(element){
  const elementToHide = document.getElementById(element);

  elementToHide.classList.add('hidden');
}

function checkUserName() {
  const password = document.getElementById('password-input').value;
  const usernameInput = document.getElementById('username-input').value;
  const word = usernameInput.slice(0, 8);
  const userID = parseInt(usernameInput.slice(8));

  if (word === 'traveler' && userID < 51 && password === 'travel2020') {
    hideElement('overlay'); 
    hideElement('login-window');
    getData(userID);
  }
}

function generateUser(userData, userID) {
  const user = userData.travelers.find(user => user.id === userID);
  console.log(user)
  currentUser = new User(user);
  displayCurrrentUser();
}

function displayCurrrentUser() {
  const usernameDisplay = document.querySelector('.username');
  usernameDisplay.innerText = currentUser.name.split(' ')[0];
  usernameDisplay.id = currentUser.id;
}

function generateTrips(tripData, destinationData) {
  allTrips = tripData.trips;
  allDestinations = destinationData.destinations;
  const trips = allTrips.map(trip => new Trip(trip));
  trips.forEach(trip => trip.getDestination(allDestinations));

  return trips;
}

function clearCards() {
  const cardContainer = document.querySelector('.container');
  const allChildrenElements = cardContainer.querySelectorAll('article');
  allChildrenElements.forEach(element => {
    cardContainer.removeChild(element);
  })
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
  const destinationList = destinationData.sort((a, b) => a.destinaiont - b.destination);

  createNewOptions(destinationList);
}

function createNewOptions(optionsList) {
  const dropdown = document.getElementById('destinations-dropdown');

  optionsList.forEach(option => {
    const newOptionElement = document.createElement("option");
    newOptionElement.value = option.destination;
    newOptionElement.innerText = option.destination;
    newOptionElement.id = option.id;

    dropdown.appendChild(newOptionElement);
  })
}

function getCostEstimate() {
    const estimatedCost = getTotalCost(allDestinations);

    displayTripCostEstimate(estimatedCost);
}

function getTotalCost(destinationData) {
  const destination = getDestination(destinationData);
  const cost = (getLodgingCost(destination) + getFlightCost(destination)) * 1.1;
  const formattedCost = cost.toFixed();

  return formattedCost;
} 

function getDestination(destinationData) {
  const destinationChoice = document.getElementById('destinations-dropdown').value;

  return destinationData.find(destination => destination.destination === destinationChoice);
}

function getFlightCost(destination) {
  const numberOfTravelers = document.getElementById('travelers-input').value;

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
  newEstimateDisplay.id = 'estimatedCostDisplay';

  bookingArea.appendChild(newEstimateDisplay);
}

function getTripId() {
  const sortedTrips = allTrips.sort((a, b) => b.id - a.id);
  const highestTripID = sortedTrips[0].id;

  return highestTripID + 1;
}

function getDestinationOptionID() {
  const destinationsDropdown = document.getElementById('destinations-dropdown');

  const selectedDestination = destinationsDropdown.value;
  const optionsList = Array.from(destinationsDropdown.options);
  const selection = optionsList.find(option => option.value === selectedDestination);

  return parseInt(selection.id);
}

function formatDate(date) {
  const dateInfo = date.split('-');

  return dateInfo.join('/');
}
