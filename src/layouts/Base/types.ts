interface Props {
  title: string;
  description: string;
  keywords: string;
  activeHeaderItem: 'home' | 'management';
  children: React.ReactElement;
}

export type { Props };
