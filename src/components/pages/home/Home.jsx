import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RaspadoPicture from '../../../images/raspados.jpg';
import GorditasStack from '../../../images/gorditasStack.jpg';
import './Home.css';

function Home() {
	return (
		<Fragment>
			{/* Header */}

			<section className='bg-orange'>
				<div className='center'>
					<p>
						Located in Las Vegas, Nevada, Las Gorditas serves Authentic gorditas
						from Durango in a cozy home-like space.
					</p>
					<p>We also serve raspados, our specialty shaved-ice desserts.</p>
				</div>
			</section>

			<section className='bg-pink'>
				<div className='split'>
					<div className='center-text'>
						<h2>
							Gorditas are handmade pockets made of corn masa and stuffed with
							savory fillings.
						</h2>
						<br />
						<h2>
							They are a typical dish you will find on every street corner in
							Durango, Mexico.
						</h2>
						<br />
						<Link className='link' to='/las_gorditas_restaurant/ourstory'>
							Learn more about our story.
						</Link>
					</div>
					<img
						className='gordita-stack'
						src={GorditasStack}
						alt='Stack of gorditas'
					/>
				</div>
			</section>

			<section className='bg-blue'>
				<div className='split'>
					<div className='center-text'>
						<h2 id='p1'>Raspados are shaved ice made with real fruit.</h2>
						<br />
						<h2 id='p2'>
							We offer sixteen delicious flavors to choose from all freshly
							made.
						</h2>
					</div>
					<img
						className='raspados'
						src={RaspadoPicture}
						alt='Three raspados surrounded by fruit'
					/>
				</div>
			</section>

			<section className='bg-orange2'>
				<div className='center'>
					<h3>840 N Decatur Blvd suite #G</h3>
					<h3>Las Vegas, NV 89107</h3>
					<br />
					<button className='directions'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.google.com/maps/place/Las+Gorditas%2FLos+Pinguinos/@36.1797732,-115.2070338,17z/data=!3m2!4b1!5s0x80c8c19c4f37eb71:0x847fce029ec92df8!4m5!3m4!1s0x80c8c19c4c0b736f:0x1b856a689f8f3130!8m2!3d36.1797732!4d-115.2048398'
						>
							Get Directions
						</a>
					</button>
				</div>
				<div className='split'>
					<div className='right-split'>
						<p>Open Everyday</p>
						<p>10am-8pm</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default Home;
