export const Layout = ({ children, id }: LayoutProps) => {
  return (
    <section
      className="p-8 mx-auto max-w-screen-xl transition-all lg:px-24 lg:pt-20 lg:pb-10"
      id={id}
    >
      {children}
    </section>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
  id?: string;
}
