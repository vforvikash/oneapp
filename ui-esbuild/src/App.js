// App.js
import { Routes, Route } from 'react-router-dom';
import Default from './Default';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import About from './about/About';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
 return (
    <>
       <Header />
       <AppRouter />
       <Footer />
    </>
 );
};

export default App;