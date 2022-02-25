
// import './App.css';
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import ContactPage from './components/ContactPage/ContactPage'

// import './boostrap/css/boostrap.min.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <PortfolioPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
