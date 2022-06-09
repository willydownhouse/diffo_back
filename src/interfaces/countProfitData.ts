export interface ICountProfitData {
  km: number;
  hours: number;
  km_price: number;
  h_price: number;
  offer: number;
}

export interface IMaybeCountProfitData {
  km: unknown;
  hours: unknown;
  km_price: unknown;
  h_price: unknown;
  offer: unknown;
}
