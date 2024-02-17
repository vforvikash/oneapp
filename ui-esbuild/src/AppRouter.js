// AppRouter.js
import { Routes, Route } from 'react-router-dom';
import Default from './Default';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import About from './about/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const AppRouter = () => {
 return (
    <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route component={NotFound}  />
    </Routes>
 );
};

export default AppRouter;