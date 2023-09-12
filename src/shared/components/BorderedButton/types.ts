interface Props extends React.PropsWithChildren {
  color: 'red' | 'green';
  isClickedTheme: boolean;
  onClick: () => void;
}

export type { Props };
