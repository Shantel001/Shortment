import { Link } from "react-router-dom";
import Button from "./Button";
import { icons } from "../constants/data";

const Facility = () => {
  return (
    <section className="grid lg:grid-cols-2 container items-center gap-10 m-[5px]">
      <div className="text-center sm:text-left sm:order-1">
        <h1 className="font-bold font-7xl leading-12 text-[#2B3F58] lg:text-[32px] sm:text-[24px]">
          we do our best to ensure we provide <br className="hidden sm:block" />
          necessary facilities for you
        </h1>
        <p className="leading-[24px] text-[#2B3F58] text-[1rem] font-[16px] pb-[25px] pt-[10px]">
          Discover your ideal apartment: Find your perfect stay at Shortmennt
          Service Apartments
        </p>
        <Link to="/signup">
          <Button text="Contact Us" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 text-[#2B3F58] mt-[40px] sm:mt-[75px] sm:gap-2 items-center sm:order-2 pb-[10px]">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-white border-[4px] m-2 sm:m-2 rounded-[10px] bg-white sm:w-[150px] h-[170px] shadow-2xl items-center mx-auto"
          >
            <img src={item.image} alt="" className="p-[40px]" />

            <p className="text-[#2B3F58] sm:text-[0.8rem] font-[16px] pb-[10px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facility;
