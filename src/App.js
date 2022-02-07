import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Ourstory from './pages/Ourstory';
import Photos from './pages/Photos';
import Contact from './pages/Contact';
import Error from './pages/Error';

//Components
import Navbar from './components/navbar/Navbar';

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
		</Router>
	);
}

export default App;
