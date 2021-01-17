class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.numberOfTravelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }

  getDestination(destinationData) {
    this.destination = destinationData.find(destination => destination.id === this.destinationID);
    
    return this.destination;
  }

  getTravelCost() {
    const lodging = this.destination.estimatedLodgingCostPerDay * this.duration;
    const flights = this.destination.estimatedFlightCostPerPerson * this.numberOfTravelers;
    const agentsFee = 1.1;
    const formattedCost = (agentsFee * (lodging + flights)).toFixed(2)

    return `$${formattedCost}`;
  }
}

module.exports = Trip;