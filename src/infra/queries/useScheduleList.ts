import { listSchedule } from '@services/Schedule/list-schedule';
import { useQuery } from 'react-query';

export const useScheduleList = (professionalId: string) => {
  return useQuery('scheduleList', async () => listSchedule(professionalId));
};
