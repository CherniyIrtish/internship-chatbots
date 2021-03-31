import { CITY_SHOPS, SHIFTS } from '../constants/enums';

interface ICashier {
  id: number;
  age: number;
  sex: string;
  yearsOfExperience: number;
  worksInShifts: SHIFTS;
  firstName: string;
  lastName: string;
  isWorking: boolean;
  workedBefore: CITY_SHOPS[];
}
