const Cashiers = require('../models').Cashiers;
const Schedules = require('../models').Schedules;
const Shops = require('../models').Shops;
const { Op } = require('sequelize');

export class CashiersService {
  async getAll() {
    return await Cashiers.findAll();
  }

  async create(cashier: any) {
    return await Cashiers.create({ title: cashier });
  }

  async getTargetCashiers1() {
    return await Cashiers.findAll({
      where: {
        yearsOfExperience: {
          [Op.gt]: 5,
        },
        workedBefore: {
          [Op.or]: [{ [Op.contains]: ['Silpo'] }, { [Op.contains]: ['Arsen'] }],
        },
      },
    });
  }

  async getTargetCashiers2() {
    const address = 'Shevchenko 100';
    const shop = await Shops.findOne({ where: { address } });

    return await Schedules.findAll({
      where: {
        shopId: shop.id,
        shiftType: '23:00-07:00',
        weekDay: 'monday',
      },
    }).then((val: any) => val.filter((item: any) => item.cashRegisterNumber % 2 !== 0));
  }
}
