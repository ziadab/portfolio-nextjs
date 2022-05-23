import { Layout } from "components/Layout";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Works = ({}: WorksProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  };

  return (
    <React.Fragment>
      <Layout>
        <motion.h1
          variants={boxVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="font-custom font-medium text-5xl"
        >
          Work
        </motion.h1>
      </Layout>
    </React.Fragment>
  );
};

export interface WorksProps {}
