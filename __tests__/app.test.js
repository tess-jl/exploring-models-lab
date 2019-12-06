const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect.js')();

describe('application routes', () => {
  // it('has a post route that posts things', () => {
  //   return request(app)
  //     .get('/')
  //     .then(res => {
  //       expect(res.body).toEqual({ text: 'hello' });
  //     });
  // });

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
});
