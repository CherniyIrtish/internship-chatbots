const router = require('express').Router({});

import { ICashier } from 'interfaces/cashier';
import { CashiersService } from '../services/cashiers';

const cashiersService = new CashiersService();

const getAll = async (req: any, res: any) => {
  const allCashiers: ICashier[] = await cashiersService.getAll();
  res.status(200).send(allCashiers);
};

const create = async (req: any, res: any) => {
  const createdCashier: ICashier = await cashiersService.create(req.body.title);
  res.status(200).send(createdCashier);
};

router.get('/', getAll);
router.post('/', create);

export default router;
