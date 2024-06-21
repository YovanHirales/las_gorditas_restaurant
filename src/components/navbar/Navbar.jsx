import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<nav>
			<ul className='main'>
				<li className='logo'>
					<Link className='link' to='/' onClick={isActive ? handleClick : ''}>
						Las Gorditas
					</Link>
				</li>
				<li className={isActive ? 'item first active' : 'item first'}>
					<Link className='link' to='/' onClick={isActive ? handleClick : ''}>
						Home
					</Link>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<a
						className='link'
						href='https://order.online/business/las-gorditas-443664'
						onClick={isActive ? handleClick : ''}
					>
						Order Online
					</a>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<Link className='link' to='/menu' onClick={handleClick}>
						Menu
					</Link>
				</li>
				<li className={isActive ? 'item active' : 'item'}>
					<Link className='link' to='/photos' onClick={handleClick}>
						Photos
					</Link>
				</li>
				<li className={isActive ? 'item last active' : 'item last'}>
					<Link className='link' to='/contact' onClick={handleClick}>
						Contact Us
					</Link>
				</li>
				<li className='toggle' onClick={handleClick}>
					<span className='bars'></span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
