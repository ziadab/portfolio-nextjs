import personal_img from "assets/images/personal_img.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { HideContext } from "pages/_app";
import { Layout } from "components/Layout";
import clsx from "clsx";

export const Hero = ({}: HeroProps) => {
  const hide = useContext(HideContext);

  return (
    <Layout>
      <div
        style={{ height: "calc(100vh -  15rem)" }}
        className={clsx(
          "flex items-c enter justify-between",
          !hide && "text-white"
        )}
      >
        <motion.div
          initial={{ x: "-200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:justify-start lg:w-3/6 items-start"
        >
          <h1 className="lg:text-8xl font-custom font-thin pt-20 lg:pt-0 text-4xl">
            Hi, my <br />
            name is <span className="font-normal">Ziad</span>
          </h1>
          <h1 className="lg:text-2xl font-custom font-light lg:pt-4 text-2xl">
            I&#39;m an{" "}
            <span className="font-normal">
              independent fullstack developer & UI/UX designer
            </span>{" "}
            from Kenitra, Morocco.
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: "200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block"
        >
          <Image
            className="rounded-full"
            alt="personal image"
            src={personal_img}
            width={275}
            height={275}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </Layout>
  );
};

export interface HeroProps {}
