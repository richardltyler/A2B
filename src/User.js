class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }

  getTripData(tripData) {
    this.trips = tripData.filter(trip => trip.userID === this.id);
  }

  getFirstName() {
    const names = this.name.split(' ');
    return names[0];
  }
}

module.exports = User;