function AlertNote({ children }: React.PropsWithChildren) {
  return <div className="bg-purple px-10 py-5 max-md:py-2.5 [&_a]:font-bold [&_a]:text-blue">{children}</div>;
}

export default AlertNote;
