import chai from 'chai';
const expect = chai.expect;

import tripData from './test-data/trip-test-data';
import destinationData from './test-data/destination-test-data'
import Trip from '../src/Trip'

describe('Trip', function() {
  let trip1;
  let trip2; 

  beforeEach(function() {
    trip1 = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
  });

  it('should be a function', function() {
    expect(Trip).to.be.a('function');
  })

  it('should instantiate a Trip', function() {
    expect(trip1).to.be.an.instanceOf(Trip);
  })

  it('should initialize with an id', function() {
    expect(trip1.id).to.eq(117);

    expect(trip2.id).to.eq(89);
  })

  it('should initialize with a userID', function() {
    expect(trip1.userID).to.eq(1);

    expect(trip2.userID).to.eq(2);
  })

  it('should initialize with a destinationID', function() {
    expect(trip1.destinationID).to.eq(28);

    expect(trip2.destinationID).to.eq(10);
  })

  it('should initialize with a number of travelers', function() {
    expect(trip1.travelers).to.eq(3);

    expect(trip2.travelers).to.eq(5);
  })

  it('should initialize with a date', function() {
    expect(trip1.date).to.eq('2021/01/09');

    expect(trip2.date).to.eq('2019/09/27');
  })

  it('should initialize with a duration', function() {
    expect(trip1.duration).to.eq(15);

    expect(trip2.duration).to.eq(13);
  })

  it('should initialize with an approval status', function() {
    expect(trip1.status).to.eq('approved');

    expect(trip2.status).to.eq('approved');
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

    expect(travelCost).to.deep.equal(4125);
  })

  it('should get the UTC date of departure', function() {
    expect(trip1.getUnixDepartureDate()).to.eq(1610175600000);
  })

  it('should get the UTC date of return', function() {
    expect(trip1.getUnixReturnDate()).to.eq(1611471600000);
  })

  it('should get a UTC return and departure date whose difference is equal to the duration in UTC', function() {
    const returnDate = trip1.getUnixReturnDate();
    const departureDate = trip1.getUnixDepartureDate();
    const calculatedDuration = returnDate - departureDate;

    expect(calculatedDuration).to.eq(trip1.duration * 86400000);
  })
})
