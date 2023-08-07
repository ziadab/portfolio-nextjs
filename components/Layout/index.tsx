import clsx from "clsx";

export const Layout = ({ children, id, className }: LayoutProps) => {
  return (
    <section
      className={clsx(
        "mx-auto max-w-screen-xl p-8 transition-all lg:px-24 lg:pb-10",
        className ? className : "lg:pt-20"
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}
