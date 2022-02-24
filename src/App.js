import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Ourstory from './pages/ourstory/Ourstory';
import Photos from './pages/photos/Photos';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';

//Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/ourstory' element={<Ourstory />} />
				<Route path='/photos' element={<Photos />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
