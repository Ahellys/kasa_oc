import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/home';
import Lodging from './pages/Lodgings/lodgingPage';
import About from './pages/About/about';
import NotFound from './pages/NotFound/notFound';
import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Lodging" element={<Lodging />} />
        <Route exact path="/pages/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
