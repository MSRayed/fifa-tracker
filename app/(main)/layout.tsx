import MarginWrapper from "@/components/margin-wrapper";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MarginWrapper>{children}</MarginWrapper>;
};

export default MainLayout;
