import { sendPetition } from 'src/config/api'
import './section6.css'

const Section6 = ({ setLoading, setAlert }) => {
	const sendForm = async (e) => {
		e.preventDefault()

		const formData = new FormData(document.querySelector('.formContact'))

		const data = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			select: formData.get('select'),
			message: formData.get('message'),
		}

		if (data.name === '' || data.phone === '' || data.select === '' || data.message === '') {
			setAlert({
				show: true,
				message: 'All fields are required',
				type: 'error',
			})

			hideAlert()
			return
		}

		const phoneRegex = /^\d{10}$/
		if (!phoneRegex.test(data.phone)) {
			setAlert({
				show: true,
				message: 'Phone number is not valid',
				type: 'error',
			})

			hideAlert()
			return
		}

		try {
			setLoading(true)
			const response = await sendPetition(data)
			setLoading(false)

			setAlert({
				show: true,
				message: response.message,
				type: 'success',
			})

			hideAlert()
		} catch (error) {
			setLoading(false)
			setAlert({
				show: true,
				message: 'An error has occurred',
				type: 'error',
			})

			hideAlert()
		}
	}

	const hideAlert = () => {
		setTimeout(() => {
			setAlert( e => {
				return {
					...e,
					show: false
				}
			})
		}, 2000)
	}

	return (
		<div className='containerSection6'>
			<div className='section6'>
				<div className='containerSection6Text'>
					<h2>Lets Talk With Us</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio odit sapiente sed eum rerum optio blanditiis. Laboriosam, dolores blanditiis?</p>
				</div>
				<div className='containerForm'>
					<form className='formContact' action="">
						<div className='containerInput'>
							<input type="text" name='name' placeholder="Your Name" />
							<input type="tel" id="phone" name="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
						</div>
						<label for="select">Select</label>
						<select id='select' name="select" defaultValue="value1">
							<option value="value1">Riding School</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
						<textarea name='message' placeholder="Your Message"></textarea>
						<button onClick={sendForm} type="submit">
							<span>Get a Quote</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Section6
