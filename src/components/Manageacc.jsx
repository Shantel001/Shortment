import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logos from "../assets/logos2.svg";
import man from "../assets/man.svg";
import { IoIosNotificationsOutline } from "react-icons/io";
const Manageacc = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    switch (value) {
      case "account":
        navigate("/accounts");
        break;
      case "bookings":
        navigate("/allbookings");
        break;
      case "favorite":
        navigate("/favoriteapartment");
        break;
      case "message":
        navigate("/message");
        break;
      case "logout":
        navigate("/");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <nav
        className="h-[75px] fixed w-full z-[2] flex justify-center bg-white border-b-[3px]
      "
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <Link to="/">
            <img src={logos} alt="logo" className=" md:block" />
          </Link>
         
          <div className="flex items-center gap-[18px]">
            <ul className="hidden lg:flex gap-[32px] text-[#4C4989] ">
             
              <li className="border-[1px] p-[15px] text-[16px] rounded-[10px] text-[#4C4989]">
                <Link to="/explore">Function as a host</Link>
              </li>
             
            </ul>
           
            <IoIosNotificationsOutline className="hidden md:block md:text-[32px] md:text-[#4C4989]" />

            <div className="relative inline-flex items-center gap-[3px] border p-2 rounded-[90px] bg-[#4C4989] border-[#4C4989] md:h-[55px] h-[30px] md:w-[120px] w-[100px]">
              <label
                htmlFor="reserve"
                className="flex-grow text-white text-xs leading-3"
              >
                <img
                  src={man}
                  alt="profile"
                  className="md:w-8 md:h-8 w-[25px] h-[25px]"
                />
              </label>
              <select
                onChange={handleSelectChange}
                name="reserve"
                id="reserve"
                className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer bg-[#4C4989] text-white leading-3 p-2"
              >
                <option
                  value="account"
                  className="text-xs py-2 px-4 m-10 bg-none"
                >
                  Account
                </option>
                <option
                  value="bookings"
                  className="text-xs py-2 px-4 m-10 bg-none"
                >
                  Handle Bookings
                </option>
                <option value="favorite" className="text-xs py-2 px-4">
                  Favorite
                </option>
                <option value="message" className="text-xs py-2 px-4">
                  Message
                </option>
                <option value="logout" className="text-xs py-2 px-4">
                  Logout
                </option>
              </select>
              <span className="absolute right-2 top-2 pointer-events-none text-white">
                &#9662;
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="">
        <p>Manage Accounts</p>
          </div>
          <div>Basic Information</div>
    </div>
  );
};

export default Manageacc;
