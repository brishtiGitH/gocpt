import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotePage from "./pages/notePage/note";
import Admin from "./pages/admin/admin";
import PasswordPage from "./pages/passwordPage/password";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";

function App() {
  return (
    <Router>
      <div className="app">
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
