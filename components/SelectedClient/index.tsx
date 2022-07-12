import { Aiesec, Elmadeal, Evold, Moredev } from "components/icons";
import { Layout } from "components/Layout";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const SelectedClient = ({}: SelectedClientProps) => {
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
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <Layout>
      <motion.h1
        animate={control}
        className="font-custom text-5xl font-medium text-black"
        initial="hidden"
        ref={ref}
        transition={{ duration: 0.6 }}
        variants={boxVariant}
      >
        Selected client:
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center mt-6 lg:mt-8">
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <div
            className="flex col-span-1 justify-center items-center py-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Aiesec
              aria-label={"AIESEC-Logo"}
              className="w-full h-full max-h-8"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <div
            className="flex col-span-1 justify-center items-center p-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Elmadeal
              aria-label={"elmadeal-logo"}
              className="w-full h-full max-h-8"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <div
            className="flex col-span-1 justify-center items-center p-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Evold
              aria-label={"Evold-logo"}
              className="w-full h-full max-h-8"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <div
            className="flex col-span-1 justify-center items-center py-8 pr-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Moredev
              aria-label={"Moredev-logo"}
              className="w-full h-full max-h-8"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export interface SelectedClientProps {}
