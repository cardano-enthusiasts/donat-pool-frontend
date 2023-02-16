export interface Props {
  projects: Array<{ title: string; id: number }>;
  onClick: (id) => void;
  currentId: number | null;
}
