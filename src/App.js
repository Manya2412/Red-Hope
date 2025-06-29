import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import RegisterDonor from './Register';
import LoginForm from './Login';
import Blood from './FindBlood';
import {HomeIntro, Collaborators, OurServices} from './Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar will always be present */}

        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<> <HomeIntro /> <Collaborators /> <OurServices /> </>} />
          <Route path="/FindBlood" element={<Blood />} />
          <Route path="/Register" element={<RegisterDonor />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>

        <Footer />  {/* Footer will always be present */}
      </div>
    </Router>
  );
}

export default App;
