import {
  AboutMe,
  ElavatorPitch,
  Hero,
  // SelectedClient,
  Works,
} from "components";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <ElavatorPitch />
      <Works />
      {/* <SelectedClient /> */}
    </>
  );
};

export default Home;
