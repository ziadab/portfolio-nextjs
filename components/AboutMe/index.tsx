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
          animate={h1control}
          className="font-custom text-xl font-medium tracking-wide text-black lg:text-5xl"
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={boxVariant}
        >
          About Me
        </motion.h1>
        <motion.p
          animate={h1control}
          className="pt-3 font-custom text-lg font-thin text-black lg:pt-12 lg:w-3/5 lg:text-xl"
          initial="hidden"
          ref={h1ref}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={boxVariant}
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
