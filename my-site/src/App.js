import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./portfolio/Header/Header";
import Home from "./portfolio/Home/Home";
import Footer from "./portfolio/Footer/Footer";
import Contact from "./portfolio/Contact/Contact";
import Project from "./portfolio/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Outlet />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
