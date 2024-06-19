import './alert.css'

const Alert = ({ alert: { show, message, type } }) => {
	return (
		<div className={`containerAlert ${type} ${show ? 'showAlert' : 'hideAlert'}`}>
			<p>{message}</p>
		</div>
	)
}

export default Alert
