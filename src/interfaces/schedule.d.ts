import { SHIFTS, WEEK_DAYS } from 'constants/enums';

export interface ISchedule {
  id: number;
  cashierId: number;
  shift: SHIFTS;
  weekDay: WEEK_DAYS;
  shopId: number;
  cashRegisterNumber: number;
}
