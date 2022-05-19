import Link from "next/link";

export const Navbar = ({}: NavbarProps) => {
  return (
    <header>
      <div className="max-w-screen-xl pt-20 px-24 pb-10 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
          </div>

          <nav className="hidden space-x-8 text-sm font-costume md:flex">
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
    </header>
  );
};

export interface NavbarProps {}
