// import chai from 'chai';
// const expect = chai.expect;

// import Destination from '../src/Destination';

// describe.only('Destination', function() {
//   let destination1;
//   let destination2;
//   let destinationData;

//   beforeEach(function() {
//     destinationData =   [{
//       "id": 1,
//       "destination": "Lima, Peru",
//       "estimatedLodgingCostPerDay": 70,
//       "estimatedFlightCostPerPerson": 400,
//       "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
//       "alt": "overview of city buildings with a clear sky"
//     }, {
//       "id": 2,
//       "destination": "Stockholm, Sweden",
//       "estimatedLodgingCostPerDay": 100,
//       "estimatedFlightCostPerPerson": 780,
//       "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//       "alt": "city with boats on the water during the day time"
//     }];

//     destination1 = new Destination(destinationData[0]);
//     destination2 = new Destination(destinationData[1]);
//   })

//   it('should be a function', function() {
//     expect(Destination).to.be.a('function');
//   })

//   it('should instantiate the Destination class', function() {
//     expect(destination1).to.be.an.instanceOf(Destination);
//   })

//   it('should initialize with an id', function() {
//     expect(destination1.id).to.eq(1);

//     expect(destination2.id).to.eq(2);
//   })

//   it('should initialize with a location', function() {
//     expect(destination1.location).to.eq(destinationData[0].destination);
//     expect(destination2.location).to.eq(destinationData[1].destination);
//   })
  
//   it('should initialize with a rough lodging cost', function() {
//     expect(destination1.estimatedLodgingCostPerDay).to.eq(70);

//     expect(destination2.estimatedLodgingCostPerDay).to.eq(100);
//   })

//   it('should initialize with a rough flight cost', function() {
//     expect(destination1.estimatedFlightCostPerPerson).to.eq(400);

//     expect(destination2.estimatedFlightCostPerPerson).to.eq(780);
//   })

//   it('should initialize with an image', function() {
//     expect(destination1.image).to.eq(destinationData[0].image);

//     expect(destination2.image).to.eq(destinationData[1].image);
//   })

//   it('should initialize with alt text', function() {
//     expect(destination1.altText).to.eq(destinationData[0].alt);

//     expect(destination2.altText).to.eq(destinationData[1].alt);
//   })
// })