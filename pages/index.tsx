import { AboutMe, Hero } from "components";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  );
};

export default Home;
