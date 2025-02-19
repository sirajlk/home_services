import React from "react";
import OurServices from "../../components/Services";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import TopBar from "../../components/TopBar";
import Brand from "../../components/Brand/brand";
import Blog from "../../components/blog/Blog";
import ConstructionLeaders from "../../components/sections/construcionleaders/ConstructionLeaders";
import Hero2 from "../../components/Hero2";
import Stats from "./Stats";
import ExperienceSection from "../../components/sections/About2";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import OverView from "../../components/sections/OverView";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Hero2 />
      <Brand />
      <ExperienceSection />
      <OverView />
      <ConstructionLeaders />
      <Stats />
      <OurServices />
      <WhyChooseUs />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
