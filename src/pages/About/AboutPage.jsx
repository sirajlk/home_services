import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { carImages } from "../../utils/constants";
import ConstructionLeaders from "../../components/sections/construcionleaders/ConstructionLeaders";
import ExperienceSection from "../../components/sections/About2";

const AboutPage = () => {
  return (
    <div>
      <Header
        backgroundImage={'/assets/images/project-5.png'}
        imageHeight="lg:h-[60vh] h-[40vh]"
      />
      <ExperienceSection />
      <ConstructionLeaders />
      <Footer />
    </div>
  );
};

export default AboutPage;
