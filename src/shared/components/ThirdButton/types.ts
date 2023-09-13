interface Props extends React.PropsWithChildren {
  stretchy?: boolean;
  platformBorderTheme?: 'blue' | 'red';
  borderTheme?: 'blue' | 'red';
  backgroundTheme?: 'black' | 'green' | 'yellow';
  textTheme?: 'white' | 'blue' | 'red';
  arrowTheme?: 'red' | 'blue';
  arrowIsUp?: boolean;
  onClick?: () => void;
}

export type { Props };
