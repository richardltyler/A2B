class Destination {
  constructor(destinationData) {
    this.id = destinationData.id;
    this.location = destinationData.destination;
    this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
    this.d = destinationData.estimatedFlightCostPerPerson;
    this.image = destinationData.image;
    this.altText = destinationData.alt;
  }
}

module.exports = Destination;