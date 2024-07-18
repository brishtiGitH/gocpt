import "./App.css";
import About from "./pages/about/about";
import Admin from "./pages/admin/admin";
import AppDescriptionPage from "./pages/companyAppDesc/appDesc";
import Contact from "./pages/contact/contact";
import ContributePage from "./pages/contribution/contributePage";
import FeaturePage from "./pages/features/feature";
import Footer from "./pages/footer/footer";
import LandingPage from "./pages/landingPage/landing";
import Login from "./pages/login/login";
import NotePage from "./pages/notePage/note";
import PasswordPage from "./pages/passwordPage/password";
import Signup from "./pages/signup/signup";
import Regards from "./pages/story/regards";

function App() {
  return (
    <div className="app">
      {/* <Login />
      <Signup />
      <Admin />
      <PasswordPage />
      <NotePage /> */}
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
}

export default App;
