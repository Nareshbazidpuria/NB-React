import './App.css';

import Navbar from './components/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Alert from './components/Alert';

function App() {
  return (
    <>
    {/* For single page  */}
    <Navbar />
    <Home />
    <About />
    <Project />
    <ContactUs />
    <Alert />

    {/* For rpoting */}
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home key='home' />} />
          <Route path="/About" element={<About key='about' />} />
          <Route path="/Projects" element={<Project key='Projects' />} />
          <Route path="/ContactUs" element={<ContactUs key='ContactUs' />} />
        </Routes>
        <Footer />
      </Router> */}

      <Footer />
    </>
  );
}

export default App;
