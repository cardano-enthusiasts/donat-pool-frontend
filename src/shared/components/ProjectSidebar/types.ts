export interface Props {
  projects: Array<{ title: string; id: string; deadline: number }> | null;
  onClick: (id) => void;
  currentId: string | null;
}
