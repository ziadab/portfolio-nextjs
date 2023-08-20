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
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <motion.p
            animate={h1control}
            className="pt-3 font-custom text-lg font-thin text-black lg:w-3/5 lg:pt-12 lg:text-xl"
            initial="hidden"
            ref={h1ref}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={boxVariant}
          >
            Hi, I&rsquo;m Ziad, and I bring 3 years of experience in Computer
            Science to the table. With a knack for turning complex ideas into
            functional applications, I&rsquo;m a full-stack developer skilled in
            Python, Typescript, and data analysis. My unique strength lies in
            quickly adapting to emerging technologies, ensuring your projects
            stay innovative and ahead of the curve. I thrive on streamlining
            processes and using data-driven insights to optimize workflows,
            ultimately saving you valuable time and resources. My commitment to
            exceeding expectations and my passion for innovation make me your
            go-to partner for driving results. Let&rsquo;s collaborate and make
            progress happen. I&rsquo;m Ziad, and I&rsquo;m ready to unleash your
            project&rsquo;s full potential.
          </motion.p>
          <div>
            <div className="lg:h-full">
              <iframe
                className="lg:h-full"
                src="https://www.loom.com/embed/63c7421bd62040b5b48272e68d6b985c?sid=d10ed9f8-07ae-4656-a8d9-61cc3714410c"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export interface ElavatorPitchProps {}
