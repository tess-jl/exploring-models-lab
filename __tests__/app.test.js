const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect.js')();

describe('application routes', () => {
  it('has a /postRoute post route', () => {
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
      .get('/5deae0345b12221e7e85e1a9')
      .then(res => {
        expect(res.body).toEqual({  '__v': 0,
          '_id': '5deae0345b12221e7e85e1a9',
          'branches': 3,
          'leaves': 300,
          'name': 'maple',
          'roots': 300,
          'trunk': 'not chopped down', });
      });
  });

  it('has an update route that updates things', () => {
    return request(app)
      .get('/5deae0345b12221e7e85e1a9')
      .send({
        name: 'elm'
      })
      .then(res => {
        expect(res.body).toEqual({  '__v': 0,
          '_id': '5deae0345b12221e7e85e1a9',
          'branches': 3,
          'leaves': 300,
          'name': 'maple',
          'roots': 300,
          'trunk': 'not chopped down', });
      });
  });
});
