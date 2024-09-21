import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import man from "../assets/man.svg";
import logos from "../assets/logos2.svg";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import useAuthStore from "../store/authStore";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout); // Access the logout function from the store
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 75) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* If there is a token i.e if a user is logged in, display this nav element else display another nav */}
      {token ? (
        <nav
          className={`h-[80px] fixed z-[11]  bg-transparent p-[15px] w-full ${
            colorChange ? "bg-white" : ""
          }`}
        >
          <div className="flex justify-between items-center container">
            <Link to="/">
              <img src={`${colorChange ? logos : logo}`} alt="logo" />
            </Link>

            <ul
              className={`flex gap-[32px] items-center text-white ${
                colorChange ? "text-primary" : ""
              }`}
            >
              <li>
                <Link
                  to="/booking"
                  className="hidden lg:block text-xl font-medium"
                >
                  Reserve a space
                </Link>
              </li>
              <li>
                <Link
                  to="/host"
                  className="hidden lg:block text-xl font-medium"
                >
                  Function as a host
                </Link>
              </li>
              <li
                onClick={handleNav}
                className="flex cursor-pointer items-center sm:gap-8 bg-primary rounded-full w-[100px] sm:w-[150px] px-[11px] py-[5px]"
              >
                <img src={man} alt="profile-img" />
                <RiArrowDropDownLine size={30} className="text-white" />
                {nav && (
                  <ul className="bg-primary text-white absolute top-[100%] rounded-[20px] right-0 lg:right-[3%] flex flex-col gap-[14px] px-[27px] py-[15px]">
                    <li>
                      <Link to="/" className="lg:hidden" onClick={handleNav}>
                        Function as a host
                      </Link>
                    </li>
                    <li>
                      <Link to="/booking" onClick={handleNav}>
                        Handling bookings
                      </Link>
                    </li>
                    <li onClick={handleNav}>
                      <Link>Favorite</Link>
                    </li>
                    <li onClick={handleNav}>
                      <Link>Message</Link>
                    </li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="flex flex-col items-center bg-[#4C4989] text-white lg:hidden">
              <ul className="flex flex-col gap-[15px] mt-4">
                <li>
                  <Link to="/" onClick={toggleNavbar}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/explore" onClick={toggleNavbar}>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/room" onClick={toggleNavbar}>
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" onClick={toggleNavbar}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={toggleNavbar}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col items-center gap-[15px] mt-4">
                <li className="border-white px-[26px] py-[15px] border rounded-[10px]">
                  <Link to="/login" onClick={toggleNavbar}>
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={toggleNavbar}>
                    <Button text="Create Account" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      ) : (
        <nav
          className={`h-[80px] fixed md:bg-black bg-[#FFFFFF] p-[15px] w-full z-50 ${
            colorChange ? "md:bg-black" : "bg-none"
          }`}
        >
          <div className="flex justify-between items-center sm:gap-[15px] container">
            <img src={logo} alt="logo" className="md:block hidden" />
            <Link to="/">
              <img src={logos} alt="logo" className="block md:hidden" />
            </Link>

            <ul className="lg:flex gap-[32px] hidden text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/room">Rooms</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <ul className="lg:flex items-center gap-[28px] hidden text-white">
              <li className="border-white px-[26px] py-[15px] border rounded-[10px]">
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">
                  <Button text="Create Account" />
                </Link>
              </li>
            </ul>

            <button
              className="lg:hidden flex justify-end"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <X className="text-black" />
              ) : (
                <Menu className="text-black" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="flex flex-col items-center bg-[#4C4989] text-white lg:hidden">
              <ul className="flex flex-col gap-[15px] mt-4">
                <li>
                  <Link to="/" onClick={toggleNavbar}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/explore" onClick={toggleNavbar}>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/room" onClick={toggleNavbar}>
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" onClick={toggleNavbar}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={toggleNavbar}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col items-center gap-[15px] mt-4">
                <li className="border-white px-[26px] py-[15px] border rounded-[10px]">
                  <Link to="/login" onClick={toggleNavbar}>
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={toggleNavbar}>
                    <Button text="Create Account" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
