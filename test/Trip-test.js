import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'

describe('Trip', function() {
  let trip1;
  let trip2; 
  let tripData;

  beforeEach(function() {
    tripData =  {
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
    };

    trip1 = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
  })

  it.skip('should be a function', function() {
    expect(Trip).to.be.a('function');
  })

  it.skip('should instantiate a Trip', function() {
    expect(trip1).to.be.an.instanceOf(Trip);
  })

  it.skip('should initialize with an id', function() {
    expect(trip1.id).to.eq(1);

    expect(trip2.id).to.eq(2);
  })

  it.skip('should initialize with a userID', function() {
    expect(trip1.userID).to.eq(44);

    expect(trip2.userID).to.eq(35);
  })

  it.skip('should initialize with a destinationID', function() {
    expect(trip1.destinationID).to.eq(49);

    expect(trip2.destinationID).to.eq(25);
  })

  it.skip('should initialize with a number of travelers', function() {
    expect(trip1.numberOfTravelers).to.eq(1);

    expect(trip1.numberOfTravelers).to.eq(5);
  })

  it.skip('should initialize with a date', function() {
    expect(trip1.date).to.eq('2019/09/16');

    expect(trip2.date).to.eq('2020/10/04');

  })

  it.skip('should initialize with a duration', function() {
    expect(trip1.duration).to.eq(8);

    expect(trip2.duration).to.eq(18);
  })

  it.skip('should initialize with an approval status', function() {
    expect(trip1.status).to.eq('approved');

    expect(trip2.status).to.eq('pending');
  })

  it.skip('should initialize with some suggested activities', function() {
    expect(trip1.suggestedActivities).to.deep.equal(tripData[0].suggestedActivities);

    expect(trip2.suggestedActivities).to.deep.equal(tripData[1].suggestedActivities);
  })
})
