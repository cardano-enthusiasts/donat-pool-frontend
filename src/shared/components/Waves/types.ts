export interface Props {
  className?: string;
  useClassName?: string;
  backgroundColor?:
    | 'transparent'
    | 'blue'
    | 'green'
    | 'red'
    | 'black'
    | 'yellow';
  isUpsideDown?: boolean;
  isMoving?: boolean;
}
