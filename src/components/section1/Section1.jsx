import './section1.css'

import { useEffect, useState } from 'react'

const Section1 = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleScroll = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className='containerHome'>
			<div className='containerNav'>
				<nav className='nav'>
					<button className="btnMenu" onClick={() => setIsOpen(!isOpen)}>
						<span translate='no' className="material-symbols-outlined">menu</span>
					</button>

					<img className='logoNav' src={require('src/assets/img/logo2.png')} alt='logo' />

					<ul className={`containerList ${isOpen ? "opennav" : "closenav"}`}>
						<li>
							<a href="#"><span className="material-symbols-outlined">arrow_right</span> Home</a>
						</li>
						<li>
							<a href="#about"><span className="material-symbols-outlined">arrow_right</span> About</a>
						</li>
						<li>
							<a href="#services"><span className="material-symbols-outlined">arrow_right</span> Services</a>
						</li>
						<li>
							<a href="#accomodation"><span className="material-symbols-outlined">arrow_right</span> Accomodation</a>
						</li>
						<li>
							<a href="#contact"><span className="material-symbols-outlined">arrow_right</span> Contact</a>
						</li>
					</ul>

					{/* <button className='btnSearch'>
						<span className="material-symbols-outlined">search</span>
					</button> */}
				</nav>
			</div>

			<div className='containerSection1'>
				<img src={require("src/assets/img/1.webp")} alt="home image" loading='eager' />
				<div className='section1'>
					<h1>
						Elite Equestrian <br/>
						Riding Horse
					</h1>
					<p>
						Top-tier boarding, training, therapeutic care, and event spaces.
					</p>
					<button>
						<span>Learn More</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Section1
