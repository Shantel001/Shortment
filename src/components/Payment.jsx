import React from 'react'
import { Link } from 'react-router-dom';
import logos from "../assets/logos2.svg";
import Button from './Button';
import envelope from "../assets/envelope.svg";


const Payment = () => {
  return (
    <section>
      <nav
        className="h-[75px] fixed w-full z-[2] flex justify-cente bg-white mb-[180px] border-b-[3px]
      "
      >
        <div className="container flex justify-between items-center sm:gap-[15px]">
          <img src={logos} alt="logo" className="sm:hidden md:block" />
          {/* <img src={logo} alt="logo" className="block lg:hidden" /> */}

          <ul className="hidden lg:flex gap-[32px] text-[#4C4989] ">
            <li>
              <Link to="/">Reserve a space</Link>
            </li>
            <li>
              <Link to="/explore">Function as a host</Link>
            </li>
          </ul>
          <Link to="/signup">
            <Button text="Begin now" />
          </Link>
        </div>
      </nav>

      <main className="flex flex-col mt-24 mb-0 ml-32 w-full max-w-[1000px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef082e03b10a077af4bde463ab03524a7367267e13a1f839ba098556a88dc6e7?placeholderIfAbsent=true&apiKey=d8f9a8d4ed1842efb5b3c2c24801111e"
          alt=""
          className="object-contain w-6 aspect-square"
        /> */}
        <div className="flex flex-col self-end px-3 mt-20 max-w-full bg-white rounded-3xl border border-solid border-stone-500 border-opacity-30 w-[800px] max-md:mt-10">
          <div className="flex overflow-hidden z-10 flex-col px-14 pt-1 pb-28 mt-0 mb-0 bg-white border-solid border-[20px] border-neutral-200 rounded-[100px] max-md:px-5 max-md:pb-24 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex flex-col max-md:mr-1.5 max-md:max-w-full">
              <h1 className="self-center ml-6 text-2xl text-slate-700">
                Payment confirmed
              </h1>

              {/* <PaymentSummary />
            <PaymentMethod /> */}
              <div className="flex z-10 shrink-0 mt-6 ml-8 w-5 rounded border border-solid border-slate-600 h-[19px] max-md:ml-2.5" />
              <div className="flex flex-col self-center -mt-5 ml-3 max-w-full text-sm text-slate-700 w-[568px]">
                <p className="text-center max-md:max-w-full">
                  Apaatment booked successfully
                  {/* By clicking this button, you agree to the{" "}
                <a href="#terms" className="underline text-slate-600">Terms of use</a>{" "}
                and{" "}
                <a href="#privacy" className="underline text-slate-600">Privacy Policy.</a>
              </p>
              <p className="max-md:max-w-full">
                I commit to paying the entire amount upon the host's acceptance of my booking. */}
                </p>
              </div>
              <div className="flex z-10 flex-col mt-0 ml-4 text-center max-md:max-w-full">
                <img src={envelope} alt="framme" className="m-[20px]" />

                <p className="text-base text-slate-700 text-opacity-80 max-md:max-w-full">
                  Your reservation has been confirmed. Confirmation of your
                  reservation was sent to your email with all details.
                </p>
                <h2 className="mt-8 text-2xl text-slate-700 max-md:max-w-full">
                  See you soon, Juwon!
                </h2>
              </div>
              <div className="flex z-10 flex-col self-center mt-0 mb-0 max-w-full font-medium text-white w-[593px] max-md:mb-2.5">
                <button className="gap-2.5 self-stretch px-2.5 py-5 mt-24 text-base bg-indigo-800 rounded-xl min-h-[66px] max-md:mt-10 max-md:mr-1.5">
                  Go to booking page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Payment