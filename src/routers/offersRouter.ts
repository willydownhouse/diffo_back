import express from 'express';
import offersController from '../controllers/offersController';

const router = express.Router();

router.route('/').post(offersController.countCostsAndOfferProfit);

export default router;
