import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.svg";
import Button from "./Button";

const Aboutus = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 container items-center gap-10 p-4 lg:p-0 pt-[20px] mt-[40px]">
      <div className="flex justify-center mb-8 lg:mb-0">
        <div
          className="flex flex-col border-white border-[10px] lg:rounded-[30px] rounded:[20px] bg-white
      w-full lg:h-[450px] h-auto  shadow-2xl items-center"
        >
          <img
            src={logo2}
            alt="about us logo"
            className="w-full lg:h-full object-contain p-4"
          />
        </div>
      </div>
      <div className="text-left">
        <h1 className="pb-[15px] text-[#2B3F58] font-bold text-[20px] lg:text-[24px]">
          About Us
        </h1>
        <p className="pb-[15px] text-[#2B3F58] text-[12px] lg:text-[16px] sm:text-[10px] text-justify">
          Welcome to Shortment Service Apartment, where comfort meets
          convenience. Nestled in the heart of Nigeria, our service apartments
          offer a perfect blend of home-like comfort and modern amenities,
          tailored to meet the needs of both short-term and long-term guests. At
          Shortment, we believe in providing a welcoming and personalized
          experience. Whether you're traveling for business, leisure, or
          relocating, our team is dedicated to making your stay comfortable and
          memorable. With a focus on exceptional service and attention to
          detail, we strive to exceed your expectations.
        </p>
        <h1 className="pb-[15px] text-[#2B3F58] font-bold text-[20px] lg:text-[24px]">
          Our Apartments
        </h1>
        <p className="pb-[15px] text-[#2B3F58] text-[12px] lg:text-[16px] text-justify">
          Our fully furnished apartments are designed with you in mind. Each
          unit features modern décor, spacious living areas, fully equipped
          kitchens, and high-speed internet as well as a private workspace.
          Enjoy the flexibility of a self-catering apartment with the added
          benefits of hotel-like services, including housekeeping, 24/7 support,
          security, and more.
        </p>
        <Link
          to="/readmore"
          className="flex justify-end mt-4 col-span-1 sm:col-span-2 lg:col-span-3"
        >
          <Button text="Read More" />
        </Link>
      </div>
    </section>
  );
};

export default Aboutus;
