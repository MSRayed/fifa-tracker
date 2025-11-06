const MarginWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="p-24">{children}</div>;
};

export default MarginWrapper;
