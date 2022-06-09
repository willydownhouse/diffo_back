import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError';

const errorHandler: ErrorRequestHandler = (
  err: AppError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log('error', err);

  const statusCode = err instanceof AppError ? err.statusCode : 500;

  return res.status(statusCode).json({
    message: err.message,
  });
};

export default errorHandler;
