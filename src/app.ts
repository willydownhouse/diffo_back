import express, { NextFunction } from 'express';
import cors from 'cors';
import offersRouter from './routers/offersRouter';
import errorHandler from './controllers/errorController';
import AppError from './utils/AppError';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/offers', offersRouter);

app.all('*', (_req, _res, next: NextFunction) => {
  next(new AppError('unknown endpoint', 404));
});

app.use(errorHandler);

export default app;
