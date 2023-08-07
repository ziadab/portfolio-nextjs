import { useEffect } from "react";
import { Layout } from "components/Layout";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export const ElavatorPitch = ({}: ElavatorPitchProps) => {
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
    <Layout id="ElavatorPitch">
      <div>
        <motion.h1
          animate={h1control}
          className="font-custom text-xl font-medium tracking-wide text-black lg:text-5xl"
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={boxVariant}
          id="elevator-pitch"
        >
          Elavator Pitch
        </motion.h1>
        <motion.p
          animate={h1control}
          className="pt-3 font-custom text-lg font-thin text-black lg:w-3/5 lg:pt-12 lg:text-xl"
          initial="hidden"
          ref={h1ref}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={boxVariant}
        >
          I&rsquo;m Ziad Abouelfarah, a computer science student with a strong
          coding background, innovative problem-solving skills, and effective
          teamwork. My expertise will streamline development processes, making
          jobs easier for employers. Looking for a talented and ambitious
          addition to your team? Let&rsquo;s collaborate and take technology to
          new heights!
        </motion.p>
      </div>
    </Layout>
  );
};

export interface ElavatorPitchProps {}
