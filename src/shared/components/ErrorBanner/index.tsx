function ErrorBanner({ children }: React.PropsWithChildren) {
  return <div className="bg-error px-20 py-5 text-center text-body-bold text-white">{children}</div>;
}

export default ErrorBanner;
