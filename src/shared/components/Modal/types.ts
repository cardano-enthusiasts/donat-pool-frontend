interface Props extends React.PropsWithChildren {
  panelTheme?: 'white' | 'black';
  title?: string;
  titleAs?: React.ElementType;
  description?: string;
  error?: string;
  onClose?: () => void;
}

export type { Props };
