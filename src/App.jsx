import { Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";
import ContactUsPage from "./pages/ContactUsPage";
import AboutPage from "./pages/About/AboutPage";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <main className="">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
};

export default App;
