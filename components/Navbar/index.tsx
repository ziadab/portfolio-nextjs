import Link from "next/link";
import { motion } from "framer-motion";
import { HideContext } from "pages/_app";
import { useContext } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import clsx from "clsx";
import { CustomDrawer } from "components/CustomDrawer";
import { Links } from "constants/links";

export const Navbar = ({}: NavbarProps) => {
  const hide = useContext(HideContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.header
      animate={{ y: 0 }}
      className={clsx(!hide && "text-white")}
      initial={{ y: -200 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <div className="p-8 mx-auto max-w-screen-xl lg:px-24 lg:pt-20 lg:pb-10">
        <div className="flex justify-between items-center space-x-4 lg:space-x-10">
          <div className="flex lg:flex-1 lg:w-0">
            {/* <span className="w-20 h-10 bg-gray-200 rounded-lg"></span> */}
            <span className="font-custom text-lg font-medium">Ziad</span>
          </div>

          <nav className="hidden space-x-8 font-custom text-lg font-light md:flex">
            {Links.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  {link.text}
                </Link>
              );
            })}
          </nav>

          <div className="lg:hidden">
            <HamburgerIcon color="white" h={18} w={18} onClick={onOpen} />
            <CustomDrawer isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export interface NavbarProps {}
