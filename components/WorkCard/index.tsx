import clsx from "clsx";
import Image from "next/image";

export const WorkCard = ({
  className,
  style,
  classNameTextBox,
}: WorkCardProps) => {
  return (
    <div style={style} className={clsx("mb-8", className)}>
      <div className={classNameTextBox}>
        <h1 className="font-custom font-medium lg:text-2xl">Title</h1>
        <h4 className="font-custom font-light lg:text-lg">With xi tasila</h4>
      </div>

      <div
        className="lg:w-full lg:h-[35rem] h-96 w-full"
        style={{
          backgroundImage: "url(https://picsum.photos/1202)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></div>
    </div>
  );
};

export interface WorkCardProps {
  className?: string;
  classNameTextBox?: string;
  style?: React.CSSProperties;
}
