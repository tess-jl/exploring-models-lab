const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect.js')();

let _id; 

describe('application routes', () => {
  it('has a /postRoute post route that creates an object', () => {
    return request(app)
      .post('/postRoute')
      .send({
        name: 'maple',
        leaves: 300, 
        roots: 300, 
        branches: 3, 
        trunk: 'not chopped down'
      })
      .then(res => {
        _id = res.body._id;
        console.log(_id, 'this is the _iddddd');
        expect(res.body).toEqual({
          '__v': 0,
          '_id': expect.any(String),
          name: 'maple',
          leaves: 300, 
          roots: 300, 
          branches: 3, 
          trunk: 'not chopped down'
        });
      });
  });
    
  it('has a get route that gets things', () => {
    return request(app)
    //copy pasted the id from the compass monogo db interface
      .get(`/${_id}`)
      .then(res => {
        expect(res.body).toEqual({  
          '__v': 0,
          '_id': `${_id}`,
          'branches': 3,
          'leaves': 300,
          'name': 'maple',
          'roots': 300,
          'trunk': 'not chopped down', });
      });
  });

  it('has an update route that updates things', () => {
    return request(app)
      .get(`/${_id}`)
      .send({
        name: 'elm'
      })
      .then(res => {
        expect(res.body).toEqual({  
          '__v': 0,
          '_id': `${_id}`,
          'branches': 3,
          'leaves': 300,
          'name': 'maple',
          'roots': 300,
          'trunk': 'not chopped down', });
      });
  });

  // it('has a delete route that deletes things', () => {
  //   return request(app)
  //     .get(`/${_id}`)
  //     .send({
  //       name: 'elm'
  //     })
  //     .then(res => {
  //       expect(res.body).toEqual({  
  //         '__v': 0,
  //         '_id': `${_id}`,
  //         'branches': 3,
  //         'leaves': 300,
  //         'name': 'maple',
  //         'roots': 300,
  //         'trunk': 'not chopped down', });
  //     });
  // });
});
