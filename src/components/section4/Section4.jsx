import './section4.css'

const Section4 = () => {
	return (
		<div className='containerSection4' id='services'>
			<div className='gridContainer'>
				<div className='service'>
					<img src={require('src/assets/img/4.webp')} alt='service' />
					<h3 className='serviceTitle'>Boarding and Training</h3>
					<span className='serviceDescription'>Comprehensive care and training facilities for horses, including stabling, grooming, and state-of-the-art arenas.</span>
					<button className='serviceButton'>Book Now</button>
				</div>
				<div className='service'>
					<img src={require('src/assets/img/5.webp')} alt='service' />
					<h3 className='serviceTitle'>Therapeutic Care</h3>
					<span className='serviceDescription'>Specialized treatments like laser therapy and solarium sessions for the health and recovery of horses.</span>
					<button className='serviceButton'>Book Now</button>
				</div>
				<div className='service'>
					<img src={require('src/assets/img/6.webp')} alt='service' />
					<h3 className='serviceTitle'>Riding Clinics</h3>
					<span className='serviceDescription'>Regular sessions conducted by renowned equestrians to enhance riding skills and techniques.</span>
					<button className='serviceButton'>Book Now</button>
				</div>
				<div className='service'>
					<img src={require('src/assets/img/7.webp')} alt='service' />
					<h3 className='serviceTitle'>Event Hosting</h3>
					<span className='serviceDescription'>Versatile venue for weddings, birthdays, and corporate events, featuring a lounge and kitchen facilities.</span>
					<button className='serviceButton'>Book Now</button>
				</div>
				<div className='service'>
					<img src={require('src/assets/img/8.webp')} alt='service' />
					<h3 className='serviceTitle'>Accommodations</h3>
					<span className='serviceDescription'>Onsite cottages available for booking, providing convenient lodging options for visitors and clients.</span>
					<button className='serviceButton'>Book Now</button>
				</div>
				<div className='service'>
					<img src={require('src/assets/img/9.webp')} alt='service' />
					<h3 className='serviceTitle'>Equestrian Clinics</h3>
					<span className='serviceDescription'>Educational workshops and training programs covering various disciplines of horsemanship and competitive riding.</span>
					<button className='serviceButton'>Book Now</button>
				</div>
			</div>
		</div>
	)
}

export default Section4
