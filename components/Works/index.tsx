import { useMediaQuery } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { WorkCard } from "components/WorkCard";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Works = ({}: WorksProps) => {
  const isMid = useMediaQuery("only screen and (min-width: 1024px)");

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
        {/* <WorkCard /> */}
        <div className="lg:flex lg:justify-between lg:pt-30 pt-12">
          <div className="lg:flex lg:flex-col lg:w-3/6">
            <WorkCard className="lg:pr-12" />
            <WorkCard className="lg:pr-12" />
            <WorkCard className="lg:pr-12" />
          </div>
          <div className="lg:flex lg:flex-col lg:w-3/6">
            <WorkCard className="lg:pl-12" />
            <WorkCard className="lg:pl-12" />
            <WorkCard className="lg:pl-12" />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export interface WorksProps {}
