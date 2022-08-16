import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cta from "./Components/CTA/cta";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./Pages/HomePage/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Footer />} />
      </Routes>
      <Footer />
      <Cta />
    </Router>
  );
}
