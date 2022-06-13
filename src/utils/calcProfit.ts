import { ICountProfitData } from '../interfaces/countProfitData';

export function doCalculationsAndReturnResponseObject(data: ICountProfitData) {
  const { km, km_price, hours, h_price, offer } = data;

  const distance_costs = km * km_price;
  const time_costs = hours * h_price;

  const profit = offer - (distance_costs + time_costs);

  return {
    distance_costs,
    time_costs,
    offer,
    profit,
  };
}
