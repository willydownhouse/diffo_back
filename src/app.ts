import express, { NextFunction } from 'express';
import cors from 'cors';
import offersRouter from './routers/offersRouter';
import errorHandler from './controllers/errorController';
import AppError from './utils/AppError';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
});

app.use(express.json());
app.use(cors());
app.use(limiter);
app.use(helmet());

app.use('/api/offers', offersRouter);

app.all('*', (_req, _res, next: NextFunction) => {
  next(new AppError('unknown endpoint', 404));
});

app.use(errorHandler);

export default app;
