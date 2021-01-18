class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }

  getFirstName() {
    const names = this.name.split(' ');
    return names[0];
  }

  getTripData(tripData) {
    const usersTrips = tripData.filter(trip => trip.userID === this.id);
    this.trips = this.sortTripsByDate(usersTrips);
  }

  sortTripsByDate(trips) {
    const sortedTrips = trips.sort((a, b) => a.getUnixDepartureDate() - b.getUnixDepartureDate());

    return sortedTrips;
  }

  getCostOfYearsTravel(currentDate) {
    const pastYearsTrips = this.getTripsFromPastYear(currentDate);
    const cost = pastYearsTrips.reduce((acc, trip) => {
      acc += parseInt(trip.getTravelCost());
      return acc;
    }, 0);

    return `$${cost}`;
  }

   getTripsFromPastYear(currentDate) {
    const currentYear = currentDate.getFullYear();
    const pastYearsTrips = this.trips.reduce((acc, trip) => {
      const tripYear = new Date (trip.getUnixDepartureDate(currentDate)).getFullYear();

      if (tripYear === currentYear - 1) {
        acc.push(trip);
      }

      return acc;
    }, [])

    return pastYearsTrips;
   }
}

module.exports = User;