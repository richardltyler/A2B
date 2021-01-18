import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'

describe.only('Trip', function() {
  let trip1;
  let trip2; 
  let tripData;
  let destinationData;

  beforeEach(function() {
    tripData =  [{
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    },
    {
      "id": 2,
      "userID": 35,
      "destinationID": 25,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }];

    destinationData = [{
      "id": 49,
      "destination": "Castries, St Lucia",
      "estimatedLodgingCostPerDay": 650,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "alt": "aerial photography of rocky mountain under cloudy sky"
    }, {
      "id": 25,
      "destination": "New York, New York",
      "estimatedLodgingCostPerDay": 175,
      "estimatedFlightCostPerPerson": 200,
      "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
    }];

    trip1 = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
  })

  it('should be a function', function() {
    expect(Trip).to.be.a('function');
  })

  it('should instantiate a Trip', function() {
    expect(trip1).to.be.an.instanceOf(Trip);
  })

  it('should initialize with an id', function() {
    expect(trip1.id).to.eq(1);

    expect(trip2.id).to.eq(2);
  })

  it('should initialize with a userID', function() {
    expect(trip1.userID).to.eq(44);

    expect(trip2.userID).to.eq(35);
  })

  it('should initialize with a destinationID', function() {
    expect(trip1.destinationID).to.eq(49);

    expect(trip2.destinationID).to.eq(25);
  })

  it('should initialize with a number of travelers', function() {
    expect(trip1.numberOfTravelers).to.eq(1);

    expect(trip2.numberOfTravelers).to.eq(5);
  })

  it('should initialize with a date', function() {
    expect(trip1.date).to.eq('2019/09/16');

    expect(trip2.date).to.eq('2020/10/04');
  })

  it('should initialize with a duration', function() {
    expect(trip1.duration).to.eq(8);

    expect(trip2.duration).to.eq(18);
  })

  it('should initialize with an approval status', function() {
    expect(trip1.status).to.eq('approved');

    expect(trip2.status).to.eq('pending');
  })

  it('should initialize with some suggested activities', function() {
    expect(trip1.suggestedActivities).to.deep.equal(tripData[0].suggestedActivities);

    expect(trip2.suggestedActivities).to.deep.equal(tripData[1].suggestedActivities);
  })

  it('should get the destination', function() {
    trip1.getDestination(destinationData);
    const destinationKeys = Object.keys(destinationData[0]);

    expect(trip1.destination).to.deep.equal(destinationData[0]);
    expect(trip1.destination).to.be.an('object').that.has.all.keys(destinationKeys);
  })

  it('should calculate the cost of travel', function() {
    trip1.getDestination(destinationData);
    const travelCost = trip1.getTravelCost();

    expect(travelCost).to.deep.equal(5819);
  })

  it('should get the UTC date of departure', function() {
    expect(trip1.getUnixDepartureDate()).to.eq(1568613600000);
  })

  it('should get the UTC date of return', function() {
    expect(trip1.getUnixReturnDate()).to.eq(1569304800000);
  })

  it('should get a UTC return and departure date whose difference is equal to the duration in UTC', function() {
    const returnDate = trip1.getUnixReturnDate();
    const departureDate = trip1.getUnixDepartureDate();
    const calculatedDuration = returnDate - departureDate;

    expect(calculatedDuration).to.eq(trip1.duration * 86400000);
  })
})
