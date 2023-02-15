export interface Props {
  projects: Array<{ title: string; id: number }>;
  onClick: (id) => void;
}
