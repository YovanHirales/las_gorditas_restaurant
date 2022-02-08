import React from 'react';

import './Menu.css';

import Menu1 from '../images/Menu1.jpg';
import Menu2 from '../images/Menu2.png';
import Menu3 from '../images/Menu3.jpg';
import Menu4 from '../images/Menu4.jpg';
import Menu5 from '../images/Menu5.jpg';
import Menu6 from '../images/Menu6.jpg';

function Menu() {
	return (
		<section className='container'>
			<div className='wrapper'>
				<span></span>
				<img src={Menu1} alt='' />
				<img src={Menu2} alt='' />
				<img src={Menu3} alt='' />
				<img src={Menu4} alt='' />
				<img src={Menu5} alt='' />
				<img src={Menu6} alt='' />
				<span></span>
			</div>
		</section>
	);
}

export default Menu;
