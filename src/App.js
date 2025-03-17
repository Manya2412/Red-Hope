import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import {HomeIntro, OurServices} from './Home';

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeIntro />
      <OurServices />
      <Footer />
    </div>
  );
}

export default App;
