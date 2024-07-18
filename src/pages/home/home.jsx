import React, { useRef } from "react";
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
  // const landingPageRef = useRef(null);
  const featurePageRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToFeaturePage() {
    let pos = featurePageRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  function scrollToAbout() {
    let pos = aboutRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  function scrollToContact() {
    let pos = contactRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div className="home-page relative z-20 bg-transparent">
      <Navbar
        scrollToFeaturePage={scrollToFeaturePage}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
      />
      <LandingPage />
      <div ref={featurePageRef}>
        <FeaturePage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>

      <Regards />
      <AppDescriptionPage />
      <ContributePage />

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
