
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Calender from './pages/calender';
import Contact from './pages/contact';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Teams from './pages/teams';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
