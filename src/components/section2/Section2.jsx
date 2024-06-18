import './section2.css'

const Section2 = () => {
	return (
		<div className='containerSection2'>
			<div className='section2'>
				<div className='sectionImg'>
					<img src={require("src/assets/img/1.webp")} alt="section 2 image" />
				</div>
				<div className='containerSection2Text'>
					<div className='containerSection2Header'>
						<span>75</span>
						<span>Years Experience</span>
					</div>
					<h2>Best School Riding Horse In Town</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a est explicabo quo soluta dolorum deleniti natus at fugiat architecto.</p>
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
							<span>Friendly Coach</span>
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
