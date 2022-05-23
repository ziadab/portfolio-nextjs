import clsx from "clsx";
import Image from "next/image";

export const WorkCard = ({ className, style }: WorkCardProps) => {
  return (
    <div style={style} className={clsx("mb-8", className)}>
      <div>
        <h1 className="font-custom font-medium lg:text-2xl">Title</h1>
        <h4 className="font-custom font-light lg:text-lg">With xi tasila</h4>
      </div>

      <Image
        src={"https://picsum.photos/seed/thlda/500/700"}
        alt="temp"
        width={500}
        height={700}
      />
    </div>
  );
};

export interface WorkCardProps {
  className?: string;
  style?: React.CSSProperties;
}
