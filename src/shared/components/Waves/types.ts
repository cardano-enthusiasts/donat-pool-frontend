export interface Props {
  color?: 'blue' | 'green' | 'red' | 'black';
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
