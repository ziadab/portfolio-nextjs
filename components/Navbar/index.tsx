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
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className={clsx(!hide && "text-white")}
    >
      <div className="max-w-screen-xl lg:pt-20 lg:px-24 lg:pb-10 p-8 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            {/* <span className="w-20 h-10 bg-gray-200 rounded-lg"></span> */}
            <span className="font-custom font-medium text-lg">Ziad</span>
          </div>

          <nav className="hidden space-x-8 text-lg font-custom font-light md:flex">
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
            <CustomDrawer onClose={onClose} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export interface NavbarProps {}
