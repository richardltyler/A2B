import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';


describe('User', function() {
  let traveler1;
  let traveler2;
  let user1;
  let user2;

  beforeEach(function() {
    traveler1 =   {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer",
    };

    traveler2 = {
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker",
    };

    user1 = new User(traveler1);
    user2 = new User(traveler2);
  })

  it.skip('should be a function', function() {
    expect(User).to.be.a.function;
  })

  it.skip('should instantiate the User class', function() {
    expect(user1).to.be.an.instanceOf(User);
  })

  it.skip('should have an id', function() {
    expect(user1.id).to.eq(traveler1.id);
  })

  it.skip('should be able to take another id', function () {
    expect(user2.id).to.eq(traveler2.id);
  })

  it.skip('should have a name', function() {
    expect(user1.name).to.eq(traveler1.name);
  })

  it.skip('should be able to take another name', function () {
    expect(user2.name).to.eq(traveler2.name);
  })

  it.skip('should have a type', function() {
    expect(user1.travelerType).to.eq(traveler1.travelerType);
  })

  it.skip('should be able to take another travelerType', function () {
    expect(user2.travelerType).to.eq(traveler2.travelerType);
  })

  it.skip('should start out with no trips', function() {
    expect(user1.trips).to.be.undefined;
  })

  it.skip('should be get the users trips', function() {
    user1.getTripData();

    expect(user1.trips).to.deep.equal();
  })
})