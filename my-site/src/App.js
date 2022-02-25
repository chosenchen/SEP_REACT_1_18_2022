import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./portfolio/Home/Home";
import Contact from "./portfolio/Contact/Contact";
import Project from "./portfolio/Project/Project";
import PortfolioLayout from "./portfolio/PortfolioLayout/PortfolioLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
