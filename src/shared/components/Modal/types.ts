interface Props {
  shown: boolean;
  panelTheme?: 'white' | 'black';
  title?: string;
  titleAs?: React.ElementType;
  description?: string;
  onClose?: () => void;
}

export type { Props };
