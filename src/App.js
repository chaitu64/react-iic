import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Calender from './pages/calender/calender';
import Contact from './pages/contact/contact';
import Events from './pages/events/events';
import Gallery from './pages/gallery/gallery';
import Teams from './pages/teams/teams';
import About from './pages/about/about';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
