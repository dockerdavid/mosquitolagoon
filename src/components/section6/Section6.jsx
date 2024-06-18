import './section6.css'

const Section6 = () => {
	return (
		<div className='containerSection6'>
			<div className='section6'>
				<div className='containerSection6Text'>
					<h2>Lets Talk With Us</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio odit sapiente sed eum rerum optio blanditiis. Laboriosam, dolores blanditiis?</p>
				</div>
				<div className='containerForm'>
					<form action="" className='formContact'>
						<div className='containerInput'>
							<input type="text" placeholder="Your Name" />
							<input type="tel" id="phone" name="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
						</div>
						<label for="select">Select</label>
						<select id='select' name="select" defaultValue="value1">
							<option value="value1">Riding School</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
						<textarea placeholder="Your Message"></textarea>
						<button onClick={(e) => e.preventDefault()}>
							<span>Get a Quote</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Section6
