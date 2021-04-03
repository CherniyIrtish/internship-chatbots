import { Request, Response, Router } from 'express';
const router: Router = require('express').Router();

import { ICashier } from 'interfaces/cashier';
import { CashiersService } from '../services/cashiers';

const cashiersService = new CashiersService();

const getAll = async (req: Request, res: Response) => {
  const allCashiers: ICashier[] = await cashiersService.getAll();
  res.status(200).send(allCashiers);
};

const create = async (req: Request, res: Response) => {
  const createdCashier: ICashier = await cashiersService.create(req.body.title);
  res.status(200).send(createdCashier);
};
const getTargetCashiers1 = async (req: Request, res: Response) => {
  const targetCashiers1: ICashier[] = await cashiersService.getTargetCashiers1();
  res.status(200).send(targetCashiers1);
};

const getTargetCashiers2 = async (req: Request, res: Response) => {
  const targetCashiers2: ICashier[] = await cashiersService.getTargetCashiers2();
  res.status(200).send(targetCashiers2);
};

router.get('/getTargetCashiers1', getTargetCashiers1);
router.get('/getTargetCashiers2', getTargetCashiers2);
router.get('/', getAll);
router.post('/', create);

export default router;
