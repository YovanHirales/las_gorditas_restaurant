import React from 'react';
import './Ourstory.css';
import RestaurantView from '../images/Restaurantview.jpg';

function Ourstory() {
	return (
		<section className='os-container'>
			<div className='wrapper'>
				<h1>Our Story</h1>
				<br />
				<p>
					Las Gorditas was established in 2004. We are a family owned business
					with good traditional homemade food! Gorditas are like “Pita Pockets”
					but handmade of corn masa & cooked fresh on the grill. Our Gorditas
					are healthy, vegan, gluten free, and never fried with 15+ fillings to
					choose from. Gorditas are a typical dish in Durango, Mexico where you
					find them on every street corner, even more common than street tacos.
					Try a Gordita today and find out why we are simply the best kept
					secret in Cocina Mexicana.
				</p>
				<br />
			</div>
			<div className='img-wrap'>
				<img className='story-img' src={RestaurantView} alt='' />
			</div>
		</section>
	);
}

export default Ourstory;
