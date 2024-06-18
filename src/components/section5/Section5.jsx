import './section5.css'

const Section5 = () => {
	return (
		<div className='containerSection5'>
			<h2 className='titlePlans'>Choose your plan</h2>
			<div className='plansGridContainer'>
				<div className='cardPlan'>
					<div className='planHeader'>
						<span className='planHeaderType'>BASIC</span>
						<span className='planHeaderDescription'>STARTER</span>
					</div>
					<div className='planBody'>
						<h2 className='planBodyPrice'>$29</h2>
						<span className='planBodyPerMonth'>PER MONTH</span>
						<button className='planBodyBookNow'>Book Now</button>
					</div>
				</div>
				<div className='cardPlan'>
					<div className='planHeader'>
						<div className='planHeaderSale'>
							<span className='planHeaderSaleText'>POPULAR</span>
						</div>
						<span className='planHeaderType'>BASIC</span>
						<span className='planHeaderDescription'>STARTER</span>
					</div>
					<div className='planBody'>
						<h2 className='planBodyPrice'>$29</h2>
						<span className='planBodyPerMonth'>PER MONTH</span>
						<button className='planBodyBookNow'>Book Now</button>
					</div>
				</div>
				<div className='cardPlan'>
					<div className='planHeader'>
						<span className='planHeaderType'>BASIC</span>
						<span className='planHeaderDescription'>STARTER</span>
					</div>
					<div className='planBody'>
						<h2 className='planBodyPrice'>$29</h2>
						<span className='planBodyPerMonth'>PER MONTH</span>
						<button className='planBodyBookNow'>Book Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section5