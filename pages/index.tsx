import { AboutMe, Hero, Works } from "components";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Works />
    </>
  );
};

export default Home;
