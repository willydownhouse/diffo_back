import { Request, Response, NextFunction } from 'express';
import { IMaybeCountProfitData } from '../interfaces/countProfitData';
import { calcProfit } from '../utils/calcProfit';
import { checkRequestBody } from '../utils/checkReqBody';

const countOfferProfit = (req: Request, res: Response, next: NextFunction) => {
  try {
    const checkedBody = checkRequestBody(req.body as IMaybeCountProfitData);

    const responseObject = calcProfit(checkedBody);

    res.status(200).json(responseObject);
  } catch (err) {
    next(err);
  }
};

export default {
  countOfferProfit,
};
