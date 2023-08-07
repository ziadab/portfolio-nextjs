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
        className={clsx("flex justify-between ", !hide && "text-white")}
        style={{ height: "calc(100vh -  15rem)" }}
      >
        <motion.div
          animate={{ x: 0 }}
          className="flex flex-col items-start lg:w-3/6 lg:justify-start"
          initial={{ x: "-200%" }}
          transition={{ duration: 1 }}
        >
          <h1 className="pt-20 font-custom text-4xl font-thin lg:pt-0 lg:text-8xl">
            Hi, my <br />
            name is <span className="font-normal">Ziad</span>
          </h1>
          <h1 className="font-custom text-2xl font-light lg:pt-4 lg:text-2xl">
            I&#39;m an{" "}
            <span className="font-normal">
              independent fullstack developer & UI/UX designer
            </span>{" "}
            based in Morocco. Who helps to turn ideas into accessible
            experiences.
          </h1>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          className="hidden lg:block"
          initial={{ x: "200%" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            alt="personal image"
            className="rounded-full"
            height={275}
            objectFit="cover"
            src={personal_img}
            width={275}
          />
        </motion.div>
      </div>
    </Layout>
  );
};

export interface HeroProps {}
