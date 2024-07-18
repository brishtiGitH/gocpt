import React from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import LandingPage from "../../components/landingPage/landing.jsx";
import FeaturePage from "../../components/features/feature.jsx";
import About from "../../components/about/about.jsx";
import Regards from "../../components/story/regards.jsx";
import AppDescriptionPage from "../../components/companyAppDesc/appDesc.jsx";
import ContributePage from "../../components/contribution/contributePage.jsx";
import Contact from "../../components/contact/contact.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <LandingPage />
      <FeaturePage />
      <About />
      <Regards />
      <AppDescriptionPage />
      <ContributePage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
