const domUpdates = {
  hideElement(element){
    const elementToHide = document.getElementById(element);

    if (!elementToHide.classList.value.includes('hidden')) {
      elementToHide.classList.add('hidden');
    }
  },

  revealElement(element) {
    const elementToHide = document.getElementById(element);
  
    elementToHide.classList.remove('hidden');
  },

  displayCurrrentUser(user) {
    const usernameDisplay = document.querySelector('.username');
    usernameDisplay.innerText = user.name.split(' ')[0];
    usernameDisplay.id = user.id;
  },

  clearCards() {
    const cardContainer = document.querySelector('.container');
    const allChildrenElements = cardContainer.querySelectorAll('article');
    allChildrenElements.forEach(element => {
      cardContainer.removeChild(element);
    });
  },

  createTripCard(trip) {
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
    },

    displayLastYearsExpenses(cost) {
      const costDisplay = document.getElementById('cost-display');
      costDisplay.innerText = cost;
    },

    addDestinationOptions(destinationData) {
      const destinationList = destinationData.sort((a, b) => a.destination - b.destination);
    
      this.createNewOptions(destinationList);
    },

    createNewOptions(optionsList) {
      const dropdown = document.getElementById('destinations-dropdown');
    
      optionsList.forEach(option => {
        const newOptionElement = document.createElement("option");
        newOptionElement.value = option.destination;
        newOptionElement.innerText = option.destination;
        newOptionElement.id = option.id;
    
        dropdown.appendChild(newOptionElement);
      });
    },

    displayMessageInBookingArea(message) {
      const bookingArea = document.querySelector('.sidebar--booking');
      const messageDisplay = bookingArea.querySelectorAll('h6');
      messageDisplay.forEach(element => element.remove());
      
      if (message) {
        const newElement = document.createElement('h6');
        newElement.innerText = message;
        newElement.id = 'booking-message';
      
        bookingArea.appendChild(newElement);
      }
    },

    displayMessage(message) {
      const messageDisplay = document.getElementById('error-message');

      messageDisplay.innerText = message;
    },

    displayPostError(message) {
      const errorDisplay = document.getElementById('cost-display');

      errorDisplay.innerText = message;
    }


}

export default domUpdates;