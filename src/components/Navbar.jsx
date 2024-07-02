import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks,logo } from "../constants";
import { menu, close } from "../assets";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <nav
        className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* D:\3D_Portfolio\src\assets\logo.png */}
            <img src={logo}  className="w-10 h-10 object-contain" alt="logo" />
            <p className="text-white font-bold cursor-pointer">Priyang Desai</p>
          </Link>
          <ul className="list-none hidden sm:flex gap-10">
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <AnchorLink href={`#${Link.id}`}>{Link.title}</AnchorLink>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end">
            <img
              src={toggle ? menu : close}
              alt="menu"
              className="object-contain cursor-pointer  w-[28px] h-[28px]"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div className={`${!toggle?"flex":"hidden"} sm:hidden p-6 mx-4 my-2 min-w-[128px] z-10 rounded-xl black-gradient absolute top-20 right-0`}>
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
               <AnchorLink href={`#${Link.id}`}>{Link.title}</AnchorLink>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
