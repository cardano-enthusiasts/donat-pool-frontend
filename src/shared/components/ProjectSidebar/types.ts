export interface Props {
  projects: Array<{ title: string; id: string }> | null;
  onClick: (id) => void;
  currentId: string | null;
}
