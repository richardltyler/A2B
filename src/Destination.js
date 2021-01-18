class Destination {
  constructor(destinationData) {
    this.id = destinationData.id;
    this.location = destinationData.destination;
    this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
    this.image = destinationData.image;
    this.altText = destinationData.alt;
  }
}

module.exports = Destination;