interface Props {
  shown: boolean;
  panelTheme?: 'light' | 'dark';
  title?: string;
  titleAs?: React.ElementType;
  onClose?: () => void;
}

export type { Props };
