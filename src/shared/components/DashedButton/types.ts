interface Props extends React.PropsWithChildren {
  primaryColor: 'red' | 'blue';
  secondaryColor: 'red' | 'blue';
  backgroundColor: 'yellow' | 'green';
  isClickedTheme: boolean;
  isFixedWidth?: boolean;
  onClick: () => void;
}

export type { Props };
