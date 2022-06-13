import { doCalculationsAndReturnResponseObject } from '../src/utils/calcProfit';

const ob = {
  km: 180,
  hours: 3,
  km_price: 9,
  h_price: 45,
  offer: 2500,
};

describe('doCalculationsAndReturnResponseObject function', () => {
  test('gives right results', async () => {
    const res = doCalculationsAndReturnResponseObject(ob);

    expect(res.profit).toBe(745);
    expect(res.distance_costs).toBe(1620);
    expect(res.time_costs).toBe(135);
    expect(res.offer).toBe(2500);
  });
});
