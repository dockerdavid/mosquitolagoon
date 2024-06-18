import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footerContent">
				<div className='containerFooterLogo'>
					<img className='logoFooter' src={require('src/assets/img/logo2.png')} alt='logo' />
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum atque minima harum voluptate deleniti velit facere minus eum quo.</p>
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

					<a href="#example">Rejodani Street, Yogyakarta</a>
					<a href="#example">t: (62) 274 - 7070 77</a>
					<a href="#example">e: info@jaran.com</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
