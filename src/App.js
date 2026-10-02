import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import RegisterDonor from './Register';
import LoginForm from './Login';
import Blood from './FindBlood';
import { HomeIntro, Collaborators, OurServices, FAQ } from './Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";

import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<> <HomeIntro /> <Collaborators /> <OurServices />  <FAQ /> </>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FindBlood" element={<Blood />} />
          <Route path="/Register" element={<RegisterDonor />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
