class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }

  getTripData(tripData) {
    this.trips = tripData;
  }
}

module.exports = User;