const Cashiers = require('../models').Cashiers;

export class CashiersService {
  async getAll() {
    return await Cashiers.findAll();
  }

  async create() {
    return await Cashiers.findAll();
  }
}
