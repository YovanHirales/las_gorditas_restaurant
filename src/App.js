import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './components/pages/home/Home';
import Menu from './components/pages/menu/Menu';
import Ourstory from './components/pages/ourstory/Ourstory';
import Photos from './components/pages/photos/Photos';
import Contact from './components/pages/contact/Contact';
import Error from './components/pages/error/Error';

//Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/las_gorditas_restaurant' element={<Home />} />
				<Route path='/las_gorditas_restaurant/menu' element={<Menu />} />
				<Route
					path='/las_gorditas_restaurant/ourstory'
					element={<Ourstory />}
				/>
				<Route path='/las_gorditas_restaurant/photos' element={<Photos />} />
				<Route path='/las_gorditas_restaurant/contact' element={<Contact />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
