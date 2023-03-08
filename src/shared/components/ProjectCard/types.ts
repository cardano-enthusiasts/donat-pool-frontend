import { type Project } from 'shared/types';

export interface Props {
  data: Omit<Project, 'creator'>;
}
