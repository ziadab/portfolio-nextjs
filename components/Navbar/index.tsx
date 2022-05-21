import Link from "next/link";
import { motion } from "framer-motion";
import { HideContext } from "pages/_app";
import { useContext } from "react";
import clsx from "clsx";

export const Navbar = ({}: NavbarProps) => {
  const hide = useContext(HideContext);

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
            <Link className="text-black font-small text-lg" href="">
              About
            </Link>
            <Link className="text-black" href="">
              Blog
            </Link>
            <Link className="text-black" href="">
              Projects
            </Link>
            <Link className="text-black" href="">
              Contact
            </Link>
          </nav>

          <div className="lg:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export interface NavbarProps {}
