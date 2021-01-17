class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }

  getTripData(tripData) {
    const usersTrips = tripData.filter(trip => trip.userID === this.id);
    this.trips = this.sortTripsByDate(usersTrips);
  }

  getFirstName() {
    const names = this.name.split(' ');
    return names[0];
  }

  sortTripsByDate(trips) {
    const sortedTrips = trips.sort((a, b) => a.getUnixDate() - b.getUnixDate());

    return sortedTrips;
  }
}

module.exports = User;