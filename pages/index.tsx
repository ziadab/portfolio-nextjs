import { AboutMe, Hero, SelectedClient, Works } from "components";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Works />
      <SelectedClient />
    </>
  );
};

export default Home;
