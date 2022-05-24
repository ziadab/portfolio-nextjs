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
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.6 }}
      style={style}
      className={clsx("mb-8", className)}
    >
      <div className={classNameTextBox}>
        <h1 className="font-custom font-medium lg:text-2xl">Title</h1>
        <h4 className="font-custom font-light lg:text-lg">With xi tasila</h4>
      </div>

      <div
        className="lg:h-[20rem] h-96 w-full"
        style={{
          backgroundImage: "url(https://picsum.photos/1202)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></div>
    </motion.div>
  );
};

export interface WorkCardProps {
  className?: string;
  classNameTextBox?: string;
  style?: React.CSSProperties;
}
