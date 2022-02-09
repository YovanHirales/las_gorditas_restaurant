import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';

function Contact() {
	const form = useRef();
	const [active, setActive] = useState(true);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_8p3zq1k',
				'template_f05kzu5',
				form.current,
				'user_FWh0nOoGwODFumkV9OtCr'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setActive(false);
		return <h4>Thank you!</h4>;
	};

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
			{active ? (
				<form ref={form} onSubmit={sendEmail}>
					<label>Name *</label>
					<input type='text' name='name' required />
					<label>Email *</label>
					<input type='email' name='email' required />
					<label>Message *</label>
					<textarea name='message' required />
					<button className='send-button' type='submit'>
						Send
					</button>
				</form>
			) : (
				<h4 className='ty'>Thank you!</h4>
			)}
		</div>
	);
}

export default Contact;
