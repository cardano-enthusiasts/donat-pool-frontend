interface Props {
  opened: boolean;
  panelTheme?: 'light' | 'dark';
  title?: string;
  titleAs?: React.ElementType;
  onClose?: () => void;
}

export type { Props };
