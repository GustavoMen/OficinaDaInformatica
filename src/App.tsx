import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cta from "./Components/CTA/Cta";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import GlobalStyle from "./globalStyles";
import Home from "./Pages/HomePage/Home";
import Service from "./Pages/ServicePage/Service";
import Systems from "./Pages/SystemsPage/Systems";

export default function App() {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/services" element={<Service />} />
        <Route path="/test" element={<Footer />} />
      </Routes>
      <Footer />
      <Cta />
    </Router>
  );
}
