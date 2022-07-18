import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "components";
import { useState, useEffect, createContext } from "react";

export const HideContext = createContext(false);

function MyApp({ Component, pageProps }: AppProps) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideNavbar = () => {
      window.scrollY > 59 ? setHide(true) : setHide(false);
    };

    window.addEventListener("scroll", hideNavbar);
  }, []);

  return (
    <ChakraProvider>
      <HideContext.Provider value={hide}>
        <Navbar />
        <Component {...pageProps} />
        <style global jsx>
          {`
            #__next {
              background-color: ${hide ? "white" : "black"};
              transition-property: color, background-color, border-color,
                text-decoration-color, fill, stroke;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 400ms;
            }
          `}
        </style>
      </HideContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
