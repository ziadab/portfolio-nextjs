// import { useMediaQuery } from "@chakra-ui/react";
import { Layout } from "components/Layout";
// import { WorkCard } from "components/WorkCard";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Works = ({}: WorksProps) => {
  // const isMid = useMediaQuery("only screen and (min-width: 1024px)");

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
    <Layout>
      <motion.h1
        animate={control}
        className="font-custom text-5xl font-medium"
        initial="hidden"
        ref={ref}
        transition={{ duration: 0.6 }}
        variants={boxVariant}
        id="portfolio"
      >
        Portfolio
      </motion.h1>
      {/* <WorkCard /> */}
      <p className="mb-5 mt-12 font-custom">Presentation:</p>
      <div className="h-[70vh] w-full">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDw9vekAgQviJ5HAiwYbeNu%2FMetamorphosis%3Ftype%3Ddesign%26node-id%3D106%253A23%26mode%3Ddesign%26t%3D7hFkjx1f90bMvWaR-1"
          allowFullScreen
        />
      </div>

      <p className="mb-5 mt-12 font-custom">Video:</p>
      <div className="h-[70vh] w-full">
        <iframe
          src="https://www.loom.com/embed/28b803de56e145938c073cb75c8feb85?sid=db729512-36ac-4138-bf07-88886ee46a36"
          allowFullScreen
          width="100%"
          height="100%"
        />
      </div>

      {/* <div className="pt-12 lg:flex lg:justify-between lg:pt-30">
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
      </div> */}
    </Layout>
  );
};

export interface WorksProps {}
