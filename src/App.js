import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import {HomeIntro, Collaborators, OurServices} from './Home';

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeIntro />
      <Collaborators />
      <OurServices />
      <Footer />
    </div>
  );
}

export default App;
