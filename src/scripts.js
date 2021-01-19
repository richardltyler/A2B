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
let tripToPost;
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
    .then(costButton.addEventListener('click', getNewTripToPost));
}

// // POST
function bookTrip(event) {
  event.preventDefault();
  const estimatedCost = document.getElementById('booking-message');

  if (tripToPost && estimatedCost && estimatedCost.innerText.includes('$')) {
    fetchAPI.postData(tripToPost)
      .then(getData(currentUser.id))
      .then(domUpdates.displayMessageInBookingArea('successfully requested new trip'));
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

  if (word === 'traveler' && password === 'travel2020' && userID) {
    getData(userID, event);
  } else { 
    domUpdates.displayMessage('PASSWORD OR USERNAME IS INCORRECT');
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

function getNewTripToPost(event) {
  const numberOfTravelers = document.getElementById('travelers-input').value;
  const durationInput = document.getElementById('duration-input').value;
  const selectedDate = document.getElementById('date-input').value;
  event.preventDefault();

  if (numberOfTravelers && durationInput && selectedDate) {
    const tripData =  {
      id: getTripId(), 
      userID: currentUser.id, 
      destinationID: getDestinationOptionID(), 
      travelers: numberOfTravelers, 
      date: formatDate(selectedDate),
      duration: durationInput, 
      status: 'pending', 
      suggestedActivities: []
    };

    tripToPost = new Trip(tripData);

    tripToPost.getDestination(allDestinations);
    domUpdates.displayMessageInBookingArea(`$${tripToPost.getTravelCost()}`);
  } else {
    domUpdates.displayMessageInBookingArea('All forms must be filled out');
  }
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