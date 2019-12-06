const request = require('supertest');
const app = require('../lib/app');

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
      .post('/hello')
      .send({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
});
