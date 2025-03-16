import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../constants/navLinks";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-x-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={"/"} className="text-x1 font-bold text-gray-800">
            My website
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavItem key={link.path} link={link} />
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus-outline-none"
          >
            {isOpen ? "X" : "="}
          </button>
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
