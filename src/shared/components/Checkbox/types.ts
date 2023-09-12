interface Props extends React.PropsWithChildren {
  checked: boolean;
  textTheme?: 'white' | 'black';
  onChange: () => void;
}

export type { Props };
