import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div className='foot-wrapper'>
				<div className='foot-info'>
					<p>lasgorditaslv@gmail.com</p>
					<p>(702)998-9720</p>
				</div>
				<div className='foot-header'>
					<h1>Las Gorditas</h1>
				</div>
				<div className='foot-links'>
					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.facebook.com/'
						>
							Facebook
						</a>
					</p>
					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.instagram.com/'
						>
							Instagram
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
