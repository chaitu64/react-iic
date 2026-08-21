import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load page components to slice bundle size via route-based code splitting
const Home = React.lazy(() => import('./pages/home'));
const Calender = React.lazy(() => import('./pages/calender/calender'));
const Contact = React.lazy(() => import('./pages/contact/contact'));
const Events = React.lazy(() => import('./pages/events/events'));
const Gallery = React.lazy(() => import('./pages/gallery/gallery'));
const Teams = React.lazy(() => import('./pages/teams/teams'));
const About = React.lazy(() => import('./pages/about/about'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#2E2A8F', fontSize: '1.2rem', fontWeight: 600 }}>Loading...</div>}>
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
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
