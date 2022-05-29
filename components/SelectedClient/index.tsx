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
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.6 }}
        ref={ref}
        className="font-custom font-medium text-5xl text-black"
      >
        Selected client:
      </motion.h1>
      <div className="flex justify-center items-center flex-wrap mt-6 lg:mt-8">
        <div className="lg:w-1/4 md:w-1/3 w-1/2">
          <div
            className="flex col-span-1 justify-center items-center py-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Aiesec
              aria-label={"AIESEC-Logo"}
              className="max-h-8 w-full h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/3 w-1/2">
          <div
            className="flex col-span-1 justify-center items-center py-8 px-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Elmadeal
              aria-label={"elmadeal-logo"}
              className="max-h-8 w-full h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/3 w-1/2">
          <div
            className="flex col-span-1 justify-center items-center py-8 px-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Evold
              aria-label={"Evold-logo"}
              className="max-h-8 w-full h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/3 w-1/2">
          <div
            className="flex col-span-1 justify-center items-center py-8 pr-8 cursor-pointer"
            style={{ height: 120 }}
          >
            <Moredev
              aria-label={"Moredev-logo"}
              className="max-h-8 w-full h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export interface SelectedClientProps {}
