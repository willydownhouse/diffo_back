import {
  ICountProfitData,
  IMaybeCountProfitData,
} from '../interfaces/countProfitData';
import AppError from './AppError';

export const checkRequestBody = ({
  km,
  hours,
  km_price,
  h_price,
  offer,
}: IMaybeCountProfitData): ICountProfitData => {
  if (!km || typeof km !== 'number') {
    throw new AppError('Please enter kilometers as a number', 400);
  } else if (!hours || typeof hours !== 'number') {
    throw new AppError('Please enter hours as a number', 400);
  } else if (!km_price || typeof km_price !== 'number') {
    throw new AppError('Please enter price per kilometer as a number', 400);
  } else if (!h_price || typeof h_price !== 'number') {
    throw new AppError('Please enter price per hour as a number', 400);
  } else if (!offer || typeof offer !== 'number') {
    throw new AppError('Please enter offer as a number', 400);
  }

  return {
    km,
    hours,
    km_price,
    h_price,
    offer,
  };
};
