import { CITY_SHOPS } from '../constants/enums';

interface ICashier {
  id: number;
  age: number;
  sex: string;
  yearsOfExperience: number;
  firstName: string;
  lastName: string;
  isWorking: boolean;
  workedBefore: CITY_SHOPS[];
}
