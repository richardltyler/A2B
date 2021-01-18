import chai from 'chai';
const expect = chai.expect;

import destinationData from './test-data/destination-test-data';
import tripData from './test-data/trip-test-data';
import userData from './test-data/user-test-data';

import User from '../src/User';
import Trip from '../src/Trip';

describe('User', function() {
  let user1;
  let user2;
  let tripDataInstances;
  let today;

  beforeEach(function() {
    user1 = new User(userData[0]);
    user2 = new User(userData[1]);

    tripDataInstances = tripData.map(trip => {
      return new Trip(trip);
    });

    today = new Date();

    user1.getTripData(tripDataInstances);
    user2.getTripData(tripDataInstances);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  })

  it('should instantiate the User class', function() {
    expect(user1).to.be.an.instanceOf(User);
  })

  it('should have an id', function() {
    expect(user1.id).to.eq(userData[0].id);
  })

  it('should be able to take another id', function () {
    expect(user2.id).to.eq(userData[1].id);
  })

  it('should have a name', function() {
    expect(user1.name).to.eq(userData[0].name);
  })

  it('should be able to take another name', function () {
    expect(user2.name).to.eq(userData[1].name);
  })

  it('should have a type', function() {
    expect(user1.travelerType).to.eq(userData[0].travelerType);
  })

  it('should be able to take another travelerType', function () {
    expect(user2.travelerType).to.eq(userData[1].travelerType);
  })

  it('should get the users trips', function() {
    expect(user1.trips).to.deep.equal([tripDataInstances[0]]);

    expect(user2.trips).to.deep.equal([tripData[1], tripData[2]])
  })

  it('should find all of the trips from the past calendar year', function() {
    const lastYearsTravel = user1.getTripsFromPastYear(today);
    const lastYearsTravel2 = user2.getTripsFromPastYear(today);

    expect(lastYearsTravel).to.deep.equal([]);
    expect(lastYearsTravel2).to.deep.equal([tripData[2]]);
  })

  it('should return the past calendar year\'s travel expense total', function () {
    user1.trips.forEach(trip => trip.getDestination(destinationData));
    user2.trips.forEach(trip => trip.getDestination(destinationData));

    const cost1 = user1.getCostOfYearsTravel(today);
    const cost2 = user2.getCostOfYearsTravel(today);

    expect(cost1).to.eq('$0');
    expect(cost2).to.eq('$6644');

    expect(cost1).to.be.a('string');
  })
})