import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav>
			<ul className='main'>
				<li className='logo'>
					<Link className='link' to='/las_gorditas_restaurant'>
						Las Gorditas
					</Link>
				</li>
				<li className={isActive ? 'item first active' : 'item first'}>
					<Link className='link' to='/las_gorditas_restaurant/menu'>
						Menu
					</Link>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<Link className='link' to='/las_gorditas_restaurant/ourstory'>
						Our Story
					</Link>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<Link className='link' to='/las_gorditas_restaurant/photos'>
						Photos
					</Link>
				</li>
				<li className={isActive ? 'item last active' : 'item last'}>
					<Link className='link' to='/las_gorditas_restaurant/contact'>
						Contact Us
					</Link>
				</li>
				<li className='toggle' onClick={() => setIsActive(!isActive)}>
					<span className='bars'></span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
