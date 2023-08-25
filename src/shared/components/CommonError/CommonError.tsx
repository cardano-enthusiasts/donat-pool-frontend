function CommonError({ children }: React.PropsWithChildren) {
  return <div className="base-wrapper bg-error py-5 text-center font-bold text-white">{children}</div>;
}

export default CommonError;
