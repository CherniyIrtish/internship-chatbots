const Cashiers = require('../models').Cashiers;

export class CashiersService {
  async getAll() {
    return await Cashiers.findAll();
  }

  async create(cashier: any) {
    return await Cashiers.create({ title: cashier });
  }
}
