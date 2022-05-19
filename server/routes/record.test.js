import request from 'supertest';
import server from '../server';

describe('Record Routes api Functional tests', () => {
  it('a get to /record should return a list of records', async () => {
    let results = await request(server).get('/record');
    expect(results.statusCode).toBe(200);
    expect(results.body).toBeInstanceOf(Array);
  });

  it('should create a new record', async () => {
    let results = await request(server).post('/record/add');
    expect(results.statusCode).toBe(200);
    let checkins = await request(server).get('/record');
    expect(checkins.statusCode).toBe(200);
    expect(checkins.body).toBeInstanceOf(Array);
    expect(checkins.body.length).toBe(1);
  });
});
