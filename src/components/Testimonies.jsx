import { IoIosStar } from "react-icons/io";

const Testimonies = () => {
  return (
    <section className="text-center items-center flex flex-col pt-[10px] pb-[50px] m-[30px]">
      <div>
        <h1 className="pb-[15px] pt-[20px] text-[30px] font-bold text-[#2B3F58]">
          Testimonies
        </h1>
        <p className="text-[#2B3F58] text-[14px]">
          "Great value for your money! Our apartments are always exactly what we
          showcase online."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 container items-center gap-10 pt-[30px]">
        <div
          className="flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
        >
          <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
            Adeola John
          </h1>
          <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6 text-left">
            I had an incredible stay at Shortment Service Apartment. The
            apartment was clean, modern, and had all the amenities I needed.
            Highly recommend it for both short and long stays!
          </p><br /><br /><br />
          <p className="ml-auto text-[10px] md:text-[12px] text-[#2B3F58] flex gap-2 items-center">
            2nd March 2024 <IoIosStar className="text-[#FFA92C]" />{" "}
            <IoIosStar className="text-[#FFA92C]" />{" "}
            <IoIosStar className="text-[#FFA92C]" />
          </p>
        </div>

        <div
          className="hidden md:flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
        >
          <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
            Julius Jimmy
          </h1>
          <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6 text-left">
            Fantastic location and excellent service! The apartment was spacious
            and comfortable, making me feel right at home. The nearby
            restaurants and shops were an added bonus. Will definitely stay here
            again on my next visit.
          </p><br /><br /><br />
          <p className="ml-auto text-[12px] text-[#2B3F58] flex gap-2 items-center">
            2nd March 2024 <IoIosStar className="text-[#FFA92C]" />{" "}
            <IoIosStar className="text-[#FFA92C]" />{" "}
            <IoIosStar className="text-[#FFA92C]" />
          </p>
        </div>

        <div
          className="hidden md:flex flex-col border-white border-[10px] rounded-[30px] bg-white
      w-full h-full shadow-2xl items-center p-[30px]"
        >
          <h1 className="pb-[25px] text-[#2B3F58] font-bold text-left">
            Andrew Blessing
          </h1>
          <p className="pb-[25px] text-[#2B3F58] text-[14px] leading-6 text-left">
            One of the best service apartments I've ever stayed in. The fully
            equipped kitchen and laundry facilities were a lifesaver. The view
            from the balcony was stunning, and the gym was well-maintained.
            Perfect for business travelers.
          </p><br /><br />
          <p className="ml-auto text-[12px] text-[#2B3F58] flex gap-2 items-center">
            2nd March 2024 <IoIosStar className="text-[#FFA92C]" />{" "}
            <IoIosStar className="text-[#FFA92C]" />{" "}
            <IoIosStar className="text-[#FFA92C]" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
