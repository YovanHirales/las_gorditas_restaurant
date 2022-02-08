import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div class='foot-wrapper'>
				<div class='foot-info'>
					<p>lasgorditaslv@gmail.com</p>
					<p>(702)998-9720</p>
				</div>
				<div class='foot-header'>
					<h1>Las Gorditas</h1>
				</div>
				<div class='foot-links'>
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
