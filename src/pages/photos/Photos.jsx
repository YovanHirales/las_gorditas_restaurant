import React from 'react';
import img1 from '../images/img1.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.JPG';
import img7 from '../images/img7.JPG';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.JPG';
import img13 from '../images/img13.JPG';
import raspados from '../images/raspados.jpg';
import gorditasStack from '../images/gorditasStack.jpg';
import img14 from '../images/img14.JPG';
import img15 from '../images/img15.JPG';

import './Photos.css';

function Photos() {
	return (
		<div className='img-grid'>
			<div
				className='card card-wide'
				style={{ backgroundImage: `url(${img1})` }}
			></div>
			<div className='card' style={{ backgroundImage: `url(${img3})` }}></div>
			<div className='card' style={{ backgroundImage: `url(${img4})` }}></div>
			<div className='card' style={{ backgroundImage: `url(${img7})` }}></div>
			<div className='card' style={{ backgroundImage: `url(${img11})` }}></div>
			<div className='card' style={{ backgroundImage: `url(${img12})` }}></div>
			<div className='card' style={{ backgroundImage: `url(${img13})` }}></div>
			<div
				className='card card-wide card-tall'
				style={{ backgroundImage: `url(${raspados})` }}
			></div>
			<div
				className='card card-tall'
				style={{ backgroundImage: `url(${gorditasStack})` }}
			></div>
			<div className='card' style={{ backgroundImage: `url(${img14})` }}></div>
			<div className='card' style={{ backgroundImage: `url(${img15})` }}></div>
		</div>
	);
}

export default Photos;
