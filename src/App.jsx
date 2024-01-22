import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Lodging from './pages/Lodgings/lodgingPage';
import About from './pages/About/about';
import NotFound from './pages/NotFound/notFound';


function App(){
    return(
        <Routes>
            <Route path="/kasa_oc/" element={<Home />} />
            <Route path="/kasa_oc/pages/Lodgings/:id" element={<Lodging />} />
            <Route path="/kasa_oc/pages/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


export default App