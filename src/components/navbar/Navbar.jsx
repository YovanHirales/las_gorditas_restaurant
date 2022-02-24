import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav>
			<ul className='main'>
				<li className='logo'>
					<Link className='link' to='/'>
						Las Gorditas
					</Link>
				</li>
				<li className={isActive ? 'item first active' : 'item first'}>
					<Link className='link' to='/'>
						Home
					</Link>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<Link className='link' to='/menu'>
						Menu
					</Link>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<Link className='link' to='/photos'>
						Photos
					</Link>
				</li>
				<li className={isActive ? 'item last active' : 'item last'}>
					<Link className='link' to='/contact'>
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
