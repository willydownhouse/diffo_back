import { calcProfit } from '../src/utils/calcProfit';

const ob = {
  km: 180,
  hours: 3,
  km_price: 9,
  h_price: 45,
  offer: 2500,
};

describe('calcProfit function', () => {
  test('gives right result 745', async () => {
    const res = calcProfit(ob);

    expect(res.profit).toBe(745);
  });
});
