import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Lodging from './pages/Lodgings/lodgingPage';
import About from './pages/About/about';
import NotFound from './pages/NotFound/notFound';


function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Lodgings/:id" element={<Lodging />} />
            <Route path="/pages/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


export default App