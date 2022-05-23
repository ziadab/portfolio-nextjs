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
        <div className=" lg:flex lg:justify-between lg:pt-44 pt-12">
          <div className="lg:flex lg:flex-col">
            <WorkCard className="lg:relative" />
            <WorkCard
              style={isMid ? { right: "9rem", top: "4rem" } : {}}
              className="lg:relative"
            />
            <WorkCard className="lg:relative" />
          </div>
          <div className="lg:flex lg:flex-col">
            <WorkCard
              style={isMid ? { left: "8rem", top: "-8rem" } : {}}
              className="lg:relative"
            />
            <WorkCard
              style={isMid ? { top: "8rem" } : {}}
              className="lg:relative"
            />
            <WorkCard className="lg:relative" />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export interface WorksProps {}
