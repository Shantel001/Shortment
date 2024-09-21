import { Link } from "react-router-dom";
import Button from "./Button";

const Offers = () => {
  return (
    <section className=" py-[30px] bg-[url('/src/assets/room7.svg')] bg-cover bg-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-4">
        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
       max-w-[445px]  shadow-2xl items-center p-[30px] container"
        >
          <p className="pb-[5px]  text-[#2B3F58] sm:text-[10px] md:text-[14px] sm:leading-4 md:leading-6 text-center">
            Increasing earnings on Shortment
          </p>
          <h1 className="pb-[20px] pt-[20px] font-bold text-[#2B3F58] text-[16px] sm:text-[14px] md:text-[18px] text-center">
            Function as a host
          </h1>
          <p className="pb-[20px]  text-[#2B3F58] text-[12px] sm:text-[10px] md:text-[14px] leading-5 sm:leading-4 md:leading-6 text-center">
            Our agents will verify your apartments to ascertain
            <br />
            and ensure it is what you showcased it to be
            <br /> before it can be approved
          </p>
          <Link to="/view more" className="">
            <Button text="Get Started" />
          </Link>
        </div>

        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
        max-w-[445px] shadow-2xl items-center p-[30px] sm:p-[30px] container"
        >
          <p className="pb-[5px] text-[#2B3F58] text-[12px] sm:text-[10px] md:text-[14px] sm:leading-4 md:leading-6 text-center">
            We look forward to welcoming you
          </p>
          <h1 className="pb-[20px] pt-[20px] font-bold text-[#2B3F58] text-[16px] sm:text-[14px] md:text-[18px] text-center">
            Reserve a space
          </h1>
          <p className="pb-[20px] text-[#2B3F58] text-[12px] sm:text-[10px] md:text-[14px] leading-5 sm:leading-4 md:leading-6 text-center">
            Thank you for choosing shortment service
            <br /> apartment for your upcoming stay. We are <br />
            delighed to assist you with your reservation
          </p>
          <Link to="/view more" className="">
            <Button text="Get Started" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offers;
