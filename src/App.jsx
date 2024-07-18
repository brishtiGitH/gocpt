import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotePage from "./pages/notePage/note";
import Admin from "./pages/admin/admin";
import PasswordPage from "./pages/passwordPage/password";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Ellipses from "./components/ellipses";

function App() {
  return (
    <Router>
      <div className="app min-h-screen">
        <div className="fixed top-0 left-0 bottom-0 right-0">
          <div className="ellipse large-ellipse1 top-44 left-0 "></div>
          <div className="ellipse large-ellipse2 bottom-1 right-1"></div>
          <div className="ellipse mid-ellipse1 top-52 right-48 "></div>
          <div className="ellipse mid-ellipse2 top-96 right-96"></div>
          <div className="ellipse small-ellipse top-2/3 left-16"></div>
          <div className="ellipse small-ellipse top-80 left-1/3"></div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/note" element={<NotePage />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/changepassword" element={<PasswordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
