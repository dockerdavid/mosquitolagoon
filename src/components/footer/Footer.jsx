import './footer.css'

const Footer = () => {
	return (
		<footer className='footer' id='contact'>
			<div className="footerContent">
				<div className='containerFooterLogo'>
					<img className='logoFooter' src={require('src/assets/img/logo2.png')} alt='logo' />
					<p>Explore Mosquito Lagoon, a premier equestrian facility in Mims, Florida, offering top-tier boarding, training, and therapeutic care, along with exceptional event spaces and riding clinics.</p>
				</div>

				<div className='containerFooterLinks'>
					<span>Other Page</span>

					<a href="#example">Home</a>
					<a href="#example">About Us</a>
					<a href="#example">Services</a>
					<a href="#example">Contact</a>
				</div>

				<div className='containerFooterLinks'>
					<span>About</span>

					<a href="#example">Privacy Policy</a>
					<a href="#example">Terms Of Service</a>
					<a href="#example">Diclaimer</a>
					<a href="#example">Credits</a>
				</div>

				<div className='containerFooterLinks'>
					<span>Address</span>

					<a href="#example">10016 Wellness Way Suite 100 Orlando, FL 32832</a>
					<a href="#example">f: (407) 281 - 8455</a>
					<a href="#example">e: admin@realtygroupfl.com</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
