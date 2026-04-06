import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./components/About/About";
import Contact from "./Pages/Contact/Contact";
import Admission from "./Pages/Admission/Admission";
import Services from "./Pages/Services/services";
import ScrollToTop from "./components/scroll";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />

      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;