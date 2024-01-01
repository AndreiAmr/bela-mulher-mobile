import { http } from '@http/index';
import { Schedule } from 'src/types/Schedule/schedule';

type ListScheduleDTO = (professionalId: string) => Promise<Schedule[]>;

export const listSchedule: ListScheduleDTO = async (professionalId) => {
  const { data } = await http.post('/schedule/list', {
    professionalId,
  });

  return data as Schedule[];
};
