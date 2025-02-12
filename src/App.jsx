// src/App.js

import { HashRouterh as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import LoveLetter from './pages/LoveLetter';
import Gallery from './pages/Gallery';
import Proposal from './pages/Proposal';
import FloatingHearts from './components/FloatingHearts';
function App() {
  return (
    <Router
    >
      {/* Global theme toggle */}

      {/* Navigation bar */}
      <Navigation />

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>

      {/* Global floating hearts animation */}
      <FloatingHearts />
    </Router>
  );
}

export default App;
