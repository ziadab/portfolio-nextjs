import { useEffect } from "react";
import { Layout } from "components/Layout";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export const AboutMe = ({}: AboutMeProps) => {
  const h1control = useAnimation();
  const [h1ref, h1inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (h1inView) {
      h1control.start("visible");
    }
  }, [h1control, h1inView]);

  const boxVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  };

  return (
    <Layout>
      <div>
        <motion.h1
          variants={boxVariant}
          initial="hidden"
          animate={h1control}
          transition={{ duration: 0.6 }}
          className="text-black font-custom font-medium tracking-wide lg:text-5xl text-xl"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={boxVariant}
          ref={h1ref}
          animate={h1control}
          initial="hidden"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-custom text-black font-thin lg:text-xl text-lg lg:w-3/5 lg:pt-12 pt-3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          labore dolorum beatae error similique nisi eius suscipit, numquam
          commodi, enim, minima sapiente aut deserunt cum quae quisquam quas a
          odio.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          labore dolorum beatae error similique nisi eius suscipit, numquam
          commodi, enim, minima sapiente aut deserunt cum quae quisquam quas a
          odio.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          labore dolorum beatae error similique nisi eius suscipit, numquam
          commodi, enim, minima sapiente aut deserunt cum quae quisquam quas a
          odio.
          <br />
          <br />
        </motion.p>
      </div>
    </Layout>
  );
};

export interface AboutMeProps {}
