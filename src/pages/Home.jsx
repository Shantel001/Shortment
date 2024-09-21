import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import News from "../components/News";
import Features from "../components/Features";
import Facility from "../components/Facility";
import Aboutus from "../components/Aboutus";
import Testimonies from "../components/Testimonies";
import Offers from "../components/Offers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="bg-heroImage bg-cover bg-center">
        <Navbar />
        <Herosection />
      </section>

      <News />
      <Features />
      <Facility />
      <Aboutus />
      <Testimonies />
      <Offers />
      <Footer />
    </>
  );
};

export default Home;
