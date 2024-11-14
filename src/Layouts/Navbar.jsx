import React, { useState } from "react";
import Logo from "../assets/img/Vector.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 py-2">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            <Link
              className="flex text-center items-center gap-2 font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              to="/"
              aria-label="Brand"
            >
              <img src={Logo} alt="" />
              Logoipsum
            </Link>
            {/* Collapse Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
            {/* End Collapse Button */}
          </div>
          {/* Collapse */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block overflow-hidden transition-all duration-300 basis-full grow`}
            id="hs-header-base"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1 text-primary font-semibold">
                    <Link
                      to={"/about"}
                      className="p-2 flex items-center text-sm text-primary border-b-2 border-white hover:border-b-2 hover:border-accent"
                    >
                      About
                    </Link>
                    <Link
                      to={"/service"}
                      className="p-2 flex items-center text-sm text-primary border-white hover:border-b-2 hover:border-accent"
                    >
                      Our Service
                    </Link>
                    <Link
                      to={"/portfolio"}
                      className="p-2 flex items-center text-sm text-primary border-white hover:border-b-2 hover:border-accent"
                    >
                      Portfolio
                    </Link>
                    <Link
                      to={"/blog"}
                      className="p-2 flex items-center text-sm text-primary border-white hover:border-b-2 hover:border-accent"
                    >
                      Blog
                    </Link>
                    <Link
                      to={"/contact"}
                      className="p-2 flex items-center text-sm text-primary border-white hover:border-b-2 hover:border-accent"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <button className="px-4 py-2 bg-accent text-white rounded-md ml-10">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
