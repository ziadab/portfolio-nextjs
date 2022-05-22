import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Layout } from "components/Layout";

export const AboutMe = ({}: AboutMeProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Layout>
      <div data-aos="fade-right" className="h-screen">
        <h1>Abour</h1>
      </div>
    </Layout>
  );
};

export interface AboutMeProps {}
