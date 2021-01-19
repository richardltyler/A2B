// WEBPACK IMPORTS
import './css/index.scss';
import domUpdates from './domUpdates';
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
    fetchAPI.getData(`travelers/${userID}`), 
    fetchAPI.getData('trips'), 
    fetchAPI.getData('destinations')
  ];

  Promise.all(fetchData)
    .then(value => { 
      if (value[0].id) {
        domUpdates.hideElement('overlay'); 
        domUpdates.hideElement('login-window');
        generateUser(value[0]);
        const trips = generateTrips(value[1], value[2]);
        currentUser.getTripData(trips);
        domUpdates.clearCards();
        domUpdates.displayLastYearsExpenses(currentUser.getCostOfYearsTravel(todaysDate));
        domUpdates.addDestinationOptions(value[2].destinations);
        currentUser.trips.forEach(trip => domUpdates.createTripCard(trip));
      } else {
        domUpdates.displayMessage('That username does not match');
      }
    })
    .then(costButton.addEventListener('click', getCostEstimate));
}

// // POST
function bookTrip(event) {
  const numberOfTravelers = document.getElementById('travelers-input').value;
  const duration = document.getElementById('duration-input').value;
  const selectedDate = document.getElementById('date-input').value;
  const estimatedCost = document.getElementById('booking-message');
  event.preventDefault();

  if (numberOfTravelers && duration && selectedDate && estimatedCost && typeof(parseInt(estimatedCost.value)) === 'number') {
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
    .then(getData(currentUser.id))
    .then(domUpdates.displayMessageInBookingArea());
  } else {
    domUpdates.displayMessageInBookingArea('You need to fill out all forms or check the cost first');
  }
}

// EVENT HANDLERS AND HELPER FUNCTIONS
function checkUserName(event) {
  const password = document.getElementById('password-input').value;
  const usernameInput = document.getElementById('username-input').value;
  const word = usernameInput.slice(0, 8);
  const userID = parseInt(usernameInput.slice(8));

  if (word === 'traveler' && password === 'travel2020') {
    getData(userID, event);
  } else { 
    domUpdates.displayMessage('PASSWORD IS INCORRECT');
  }
}

function generateUser(userData) {
  currentUser = new User(userData);

  domUpdates.displayCurrrentUser(currentUser);
}

function generateTrips(tripData, destinationData) {
  allTrips = tripData.trips;
  allDestinations = destinationData.destinations;
  const trips = allTrips.map(trip => new Trip(trip));
  trips.forEach(trip => trip.getDestination(allDestinations));

  return trips;
}

function getCostEstimate(event) {
  event.preventDefault();
  const estimatedCost = getTotalCost(allDestinations);

  domUpdates.displayMessageInBookingArea(`$${estimatedCost}`);
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
