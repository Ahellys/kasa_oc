import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Lodging from './pages/Lodgings/lodgingPage';
import About from './pages/About/about';
import NotFound from './pages/NotFound/notFound';
import { useState } from 'react';

function App(){
    const [activeLodgement, setActive ] = useState(null);   
    return(
        <Routes>
            <Route path="/" element={<Home activeLodgement={activeLodgement} setActive={setActive}/>} />
            <Route path="pages/Lodgings" element={<Lodging activeLodgement={activeLodgement} setActive={setActive}/>} />
            <Route path="/pages/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


export default App