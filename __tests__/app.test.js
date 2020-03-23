const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect.js').connect();
const disconnect = require('../lib/utils/connect').disconnect;
const mongoose = require('mongoose');


let _id; 

describe('application routes', () => {
  beforeAll(() => {
    return mongoose.connection.dropDatabase();
  });
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
    
  it('has a get route that gets one thing', () => {
    return request(app)
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
  it('has a get route that gets all the things in the collection (only one thing in this test environment)', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toEqual([{ 
          '__v': 0,
          '_id': expect.any(String),
          name: 'maple',
          leaves: 300, 
          roots: 300, 
          branches: 3, 
          trunk: 'not chopped down'
        }]);
        expect(res.body).toHaveLength(1);
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

  it('has a delete route that deletes things', () => {
    return request(app)
      .get(`/${_id}`)
      .then(res => {
        expect(res.body).toEqual({  
          '__v': 0,
          '_id': `${_id}`,
          'branches': 3,
          'leaves': 300,
          'name': 'maple',
          'roots': 300,
          'trunk': 'not chopped down', 
        });
      });
  });
});

afterAll(() => {
  disconnect();
});
