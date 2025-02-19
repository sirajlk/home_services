import { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BiPhone, BiPhoneCall } from "react-icons/bi";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const headerClass = () => {
    return isScrolled
      ? "bg-secondary_background fixed top-0 left-0 w-full transition-all duration-300"
      : "bg-transparent absolute top-0 left-0 w-full";
  };

  return (
    <header className={`${headerClass()} z-50` } >
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/" className="w-24 xl:w-36">
            <img
              src="/assets/images/logo.png"
              alt="Fox Travel Egypt"
              width={3608}
              height={1275}
            />
          </Link>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-4 text-xl text-gray-300">
            <NavLinks activeClass="text-primary" hoverClass="hover:text-primary" />
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white flex items-center gap-1  text-lg tracking-wider font-semibold text-black px-4 py-2 rounded-full">
            <BiPhoneCall className="text-primary" /> <strong>+9611231234 </strong>
          </button>
         
        </div>

        {/* Mobile Menu Toggler */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RiMenu3Fill className="h-6 w-6" />
        </button>
      </div>

      <MobileMenu onClose={() => setIsMenuOpen(false)} isOpened={isMenuOpen} />
    </header>
  );
};

const MobileMenu = ({ onClose, isOpened }) => {
  const wrapperClass =
    "fixed z-50 inset-0 bg-black text-white flex flex-col transition-all duration-500";
  const activeClass = isOpened ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`${wrapperClass} ${activeClass} ` }>
      <div className="flex items-center justify-between  p-3">
        <Link to="/" className="w-24">
          <img
            src="/assets/images/logo.png"
            alt="Fox Travel Egypt"
            width={3608}
            height={1275}
            className=""
          />
        </Link>

        <button className="h-10 w-10" onClick={onClose}>
          <FaWindowClose className="h-8 w-8" />
        </button>
      </div>

      <nav className="flex flex-col  text-2xl text-white">
        <NavLinks
          activeClass="bg-primary text-white"
          hoverClass="hover:bg-primary hover:text-white"
          defaultClass="p-3"
          onNavClick={onClose}
        />
      </nav>
    </div>
  );
};

export default TopBar;
