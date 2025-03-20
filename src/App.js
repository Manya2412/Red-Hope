import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import RegisterDonor from './Register';
import LoginForm from './Login';
import {HomeIntro, OurServices} from './Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar will always be present */}

        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<> <HomeIntro /> <OurServices /> </>} />
          <Route path="/Register" element={<RegisterDonor />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>

        <Footer />  {/* Footer will always be present */}
      </div>
    </Router>
  );
}

export default App;
