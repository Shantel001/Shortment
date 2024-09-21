import { CiSearch } from "react-icons/ci";
const News = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-[10px] pb-[50px] text-black text-center">
      <h1 className="pt-[30px] md:pt-[73px] font-bold text-[#2B3F58] text-[1.2rem] md:text-[2rem] leading-12">
        Featured Accomodation
      </h1>
      <p className="pt-[5px] pb-[25px] text-[#2B3F58] text-[0.9rem] md:text-[1.5rem]">
        Experience Comfort and Luxury in Everystay
      </p>
      {/* Functional search box */}
      {/* <div className="flex gap-[5px] border-[#2B3F58] px-[16px] md:px-[26px] py-[12px] border rounded-[10px] md:rounded-[30px] w-full md:w-auto text-[#2B3F58]"> */}
      <div className="flex items-center gap-[5px] border-[#2B3F58] px-[16px] md:px-[26px] py-[12px] border rounded-[10px] md:rounded-[30px] text-[#2B3F58]">
        <CiSearch className="text-[#2B3F58]" />
        <input
          type="text"
          className="outline-none md:w-[460px]"
          placeholder="Search for an apartment, packages, or add-one"
        />
        {/* <b>Search</b>
        <span className="md:inline hidden">
          for an apartment, packages, or add-one
        </span> */}
      </div>
    </div>
  );
};

export default News;
