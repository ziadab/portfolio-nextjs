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
          Meet Ziad, a versatile fullstack freelancer renowned for his
          exceptional coding skills and boundless creativity. Under his personal
          brand, he embraces the ever-evolving world of technology while
          nurturing a deep fascination for artificial intelligence and
          multilingualism. Ziad&rsquo;s journey is defined by his relentless
          pursuit of knowledge, not only in the realms of coding and AI but also
          in mastering new languages.
          <br />
          <br />
          Among Ziad&rsquo;s remarkable achievements, he stands as the visionary
          mind behind the Katarina Slayer Bot. Initially conceived to address
          common B2C challenges, the bot&rsquo;s impact transcended its original
          purpose, becoming an indispensable tool across various departments.
          His involvement with Elmadeal, a multinational salon management
          platform, demonstrates his ability to fuse technology with business,
          facilitating seamless client-salon interactions on a global scale.
          Ziad&rsquo;s ingenuity further shines through in his creation of a
          YouTube Converter with Metadata, revolutionizing how music enthusiasts
          personalize their audio files by embedding detailed information using
          Spotify API integration.
          <br />
          <br />
          As Ziad forges ahead on his dynamic journey, his determination to
          explore the frontiers of AI and language acquisition remains
          unwavering. Rooted in a profound commitment to innovation and driven
          by a passion for solving real-world problems, Ziad continues to carve
          a distinctive path in the world of technology, leaving an indelible
          mark with every project he undertakes.
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
