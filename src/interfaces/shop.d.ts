import { ICashRegister } from './cash-register';

interface IShop {
  id: number;
  shopNumber: number;
  address: string;
  cashRegisters: ICashRegister[];
}
