export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="max-w-screen-xl lg:pt-20 lg:px-24 lg:pb-10 p-8 mx-auto transition-all">
      {children}
    </section>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
}
