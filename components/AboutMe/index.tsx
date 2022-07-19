import { useEffect } from "react";
import { Layout } from "components/Layout";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { Aiesec, Elmadeal, Evold, Moredev } from "components/icons";

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
    <Layout className="lg:pt-0" id="AboutMe">
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
        <motion.div
          animate={h1control}
          initial="hidden"
          ref={h1ref}
          transition={{ duration: 0.6, delay: 0.8 }}
          variants={boxVariant}
        >
          <p className="font-custom text-lg font-medium">Trusted By: </p>
          <div className="flex items-center mt-3">
            <Aiesec className="h-6" />
            <Elmadeal className="ml-6 h-6" />
            <Evold className="ml-6 h-6" />
            <Moredev className="ml-6 h-6" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export interface AboutMeProps {}
