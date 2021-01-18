class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }

  getDestination(destinationData) {
    this.destination = destinationData.find(destination => destination.id === this.destinationID);
  }

  getTravelCost() {
    const lodging = this.destination.estimatedLodgingCostPerDay * this.duration;
    const flights = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const agentsFee = 1.1;

    return parseInt((agentsFee * (lodging + flights)).toFixed(2));
  }

  getUnixDepartureDate() {
    return new Date(this.date).getTime();
  }

  getUnixReturnDate() {
    const durationTime = this.duration * 86400000;
    const departureDate = this.getUnixDepartureDate();
    const returnDate = new Date(departureDate + durationTime).getTime();
    
    return returnDate;
  }
}

module.exports = Trip;