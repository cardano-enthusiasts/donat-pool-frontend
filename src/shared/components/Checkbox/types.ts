import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  isChecked: boolean;
  onChange: () => void;
}

export type { Props };
