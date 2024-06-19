import './section2.css'

const Section2 = () => {
	return (
		<div className='containerSection2' id='about'>
			<div className='section2'>
				<div className='sectionImg'>
					<img src={require("src/assets/img/2.webp")} alt="section 2 image" />
				</div>
				<div className='containerSection2Text'>
					<div className='containerSection2Header'>
						<span>3</span>
						<span>Years Experience</span>
					</div>
					<h2>Best Equestrian Center</h2>
					<p>Welcome to Mosquito Lagoon, a premier equestrian facility in Mims, Florida, offering top-tier boarding, training, and therapeutic care, along with exceptional event spaces and riding clinics.</p>
					<div className='containerCheckText'>
						<div>
							<span className="material-icons">check_circle</span>
							<span>Customer Happy is Our Priorty</span>
						</div>
						<div>
							<span className="material-icons">check_circle</span>
							<span>We Always Put Quality First</span>
						</div>
						<div>
							<span className="material-icons">check_circle</span>
							<span>Friendly Accomodation</span>
						</div>
					</div>
					<button>
						<span>Book Now</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Section2
