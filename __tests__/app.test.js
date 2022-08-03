const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  
  it('should return list of books', async () => {
    const res = await request(app).get('/books');
    const sweetgrass = res.body.find((book) => book.id === '1');
    expect(res.body.length).toEqual(8);
    expect(sweetgrass).toHaveProperty('title', 'Braiding Sweetgrass');
  });

  it('should return a specific book detail', async () => {
    const res = await request(app).get('/books/2');
    const compass = {
      authors: [{
        dob: '10/19/1946',
        id: 2,
        name: 'Philip Pullman',
        pob: 'Norwich, England'
      }],
      id: '2',
      title: 'The Golden Compass',
      released: 1995
    };

    expect(res.body).toEqual(compass);

  });


  afterAll(() => {
    pool.end();
  });
});
