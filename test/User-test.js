import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';
import Trip from '../src/Trip';

describe.only('User', function() {
  let traveler1;
  let traveler2;
  let user1;
  let user2;
  let tripData = [{
    "id": 117,
    "userID": 1,
    "destinationID": 28,
    "travelers": 3,
    "date": "2021/01/09",
    "duration": 15,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 89,
    "userID": 2,
    "destinationID": 10,
    "travelers": 5,
    "date": "2019/09/27",
    "duration": 13,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 100,
    "userID": 2,
    "destinationID": 6,
    "travelers": 6,
    "date": "2020/3/28",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 116,
    "userID": 3,
    "destinationID": 7,
    "travelers": 3,
    "date": "2020/04/03",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  }];

  let tripDataInstances;
  let today;

  let destinationData;
  
  beforeEach(function() {
    traveler1 = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    };
    
    traveler2 = {
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker"
    };

    user1 = new User(traveler1);
    user2 = new User(traveler2);

    tripDataInstances = tripData.map(trip => {
      return new Trip(trip);
    });

    today = new Date();

    destinationData = [{
      "id": 28,
      "destination": "San Juan, Puerto Rico",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 900,
      "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
      "alt": "white and brown concrete buildings near sea under white clouds during daytime"
    }, {
      "id": 10,
      "destination": "Toronto, Canada",
      "estimatedLodgingCostPerDay": 90,
      "estimatedFlightCostPerPerson": 450,
      "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80",
    }, {
      "id": 6,
      "destination": "Jakarta, Indonesia",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 890,
      "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "lit up city at night"
    }, {
      "id": 7,
      "destination": "Paris, France",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 395,
      "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      "alt": "city during the day time with eiffel tower"
    }];

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
    expect(user1.id).to.eq(traveler1.id);
  })

  it('should be able to take another id', function () {
    expect(user2.id).to.eq(traveler2.id);
  })

  it('should have a name', function() {
    expect(user1.name).to.eq(traveler1.name);
  })

  it('should be able to take another name', function () {
    expect(user2.name).to.eq(traveler2.name);
  })

  it('should have a type', function() {
    expect(user1.travelerType).to.eq(traveler1.travelerType);
  })

  it('should be able to take another travelerType', function () {
    expect(user2.travelerType).to.eq(traveler2.travelerType);
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