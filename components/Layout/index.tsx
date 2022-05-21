import clsx from "clsx";

export const Layout = ({ children, hide }: LayoutProps) => {
  return (
    <div className="max-w-screen-xl lg:pt-20 lg:px-24 lg:pb-10 p-8 mx-auto transition-all">
      {children}
    </div>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
  hide: boolean;
}
