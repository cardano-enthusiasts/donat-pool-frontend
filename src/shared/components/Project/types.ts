interface Props extends React.PropsWithChildren {
  previousPageTitle: string;
  title: string;
  onPreviousPageClick: () => void;
}

export type { Props };
