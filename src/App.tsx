
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MatchDetail from './pages/MatchDetail';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/:id" element={<MatchDetail />} />
      </Routes>
      <Footer /> {/* a */}
    </Router>
  );
}

export default App;
