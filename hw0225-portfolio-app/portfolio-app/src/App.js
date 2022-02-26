import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>

      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
