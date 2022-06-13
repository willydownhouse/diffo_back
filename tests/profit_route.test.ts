import supertest from 'supertest';
import app from '../src/app';

const api = supertest(app);

const ob = {
  km: 180,
  hours: 3,
  km_price: 9,
  h_price: 45,
  offer: 2500,
};

describe('SUCCESS REQUEST', () => {
  test('right response with valid input', async () => {
    const res = await api.post('/api/offers').send(ob);

    expect(res.body.distance_costs).toBe(1620);
    expect(res.body.time_costs).toBe(135);
    expect(res.body.offer).toBe(2500);
    expect(res.body.profit).toBe(745);
  });
});

describe('ERROR REQUESTS', () => {
  test('throw error if body does not have kilometers', async () => {
    const res = await api.post('/api/offers');

    expect(res.body.message).toBe('Please enter kilometers as a number');
    expect(res.statusCode).toBe(400);
  });
  test('throw error if body does not have hours', async () => {
    const res = await api.post('/api/offers').send({
      km: 12,
    });

    expect(res.body.message).toBe('Please enter hours as a number');
    expect(res.statusCode).toBe(400);
  });
  test('throw error if body does not have kilometer price', async () => {
    const res = await api.post('/api/offers').send({
      km: 180,
      hours: 3,
    });

    expect(res.body.message).toBe(
      'Please enter price per kilometer as a number'
    );
    expect(res.statusCode).toBe(400);
  });
  test('throw error if body does not have hour price', async () => {
    const res = await api.post('/api/offers').send({
      km: 180,
      hours: 3,
      km_price: 9,
    });

    expect(res.body.message).toBe('Please enter price per hour as a number');
    expect(res.statusCode).toBe(400);
  });
  test('throw error if body does not have offer', async () => {
    const res = await api.post('/api/offers').send({
      km: 180,
      hours: 3,
      km_price: 9,
      h_price: 30,
    });

    expect(res.body.message).toBe('Please enter offer as a number');
    expect(res.statusCode).toBe(400);
  });
});
