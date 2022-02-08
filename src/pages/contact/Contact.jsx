import React from 'react';

import './Contact.css';

function Contact() {
	return (
		<div className='contact-page-split'>
			<div className='contact-page-info'>
				<h4>Contact us.</h4>
				<div className='p1'>
					<p>
						lasgorditaslv@gmail.com
						<br />
						(702)998-9720
					</p>
				</div>
				<div className='p2'>
					<p>
						840 N Dectur Blvd Suite #G
						<br />
						Las Vegas, NV 89107
					</p>
				</div>
			</div>
			<div className='send-email-container'></div>
		</div>
	);
}

export default Contact;
