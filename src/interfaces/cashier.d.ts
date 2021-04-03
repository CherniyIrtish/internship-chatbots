import { CITY_SHOPS } from '../constants/enums';

interface ICashier {
  id: number;
  age: number;
  sex: string;
  yearsOfExperience: number;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  isWorking: boolean;
  workedBefore: CITY_SHOPS[];
}
