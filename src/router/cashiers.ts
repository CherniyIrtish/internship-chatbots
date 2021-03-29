const router = require('express').Router({});

import { CashiersService } from '../services/cashiers';

const cashiersService = new CashiersService();

const getAll = async (req: any, res: any) => {
  const allCashiers = await cashiersService.getAll();
  res.status(200).send(allCashiers);
};

const create = async (req: any, res: any) => {
  console.log(req.body);
  const allCashiers = await cashiersService.getAll();
  res.status(200).send(allCashiers);
};

router.get('/', getAll);
router.post('/', create);

export default router;
