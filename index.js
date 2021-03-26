const express = require('express');
// const antares = require('antares-http')
const axios = require('axios').default;
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());

// antares.setAccessKey('7d624446e01e538a:ee7bed8fd8f16dc5')
let response;

app.get('/latest-data', (req, res) => {
	
	axios.get(`https://platform.antares.id:8443/~/antares-cse/antares-id/ParseTest1/TestDevice/la`, { headers: {
		'X-M2M-Origin': '7d624446e01e538a:ee7bed8fd8f16dc5',
		'Content-Type': 'application/json;ty=4',
		'Accept': 'application/json'
	} })
		.then((res) => {
			let data = res.data
			response = data
		})
	// res.json(response)
	res.send(response)
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
});
