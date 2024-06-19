export const sendPetition = async (data) => {
	const response = await fetch('https://api.example.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
  	})

  	return response.json()
}
