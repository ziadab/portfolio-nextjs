import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const WorkCard = ({
  className,
  style,
  classNameTextBox,
}: WorkCardProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.a
      animate={control}
      className={className}
      href="#"
      initial="hidden"
      ref={ref}
      style={style}
      transition={{ duration: 0.6 }}
      variants={boxVariant}
    >
      <div
        className="w-full h-96 lg:h-[20rem]"
        style={{
          backgroundImage: "url(https://picsum.photos/1202)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></div>
      <div className={clsx(classNameTextBox, "mt-4", "mb-8")}>
        <h1 className="font-custom font-medium lg:text-2xl">Title</h1>
        <h4 className="font-custom font-light lg:text-lg">With xi tasila</h4>
      </div>
    </motion.a>
  );
};

export interface WorkCardProps {
  className?: string;
  classNameTextBox?: string;
  style?: React.CSSProperties;
}
