interface Props {
  shown: boolean;
  panelTheme?: 'light' | 'dark';
  title?: string;
  titleAs?: React.ElementType;
  description?: string;
  onClose?: () => void;
}

export type { Props };
