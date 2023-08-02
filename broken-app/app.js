const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json())

app.get('/dev', async (request, response) => {
    try {
        console.log(request.query);
        const developerUsername = request.query.developer;
        const apiResponse = await axios.get(`https://api.github.com/users/${developerUsername}`);
        return (response.status(200).json(apiResponse.data))
    } catch (error) {
        console.error(error.message)
        return response.status(500);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

//code currently does not:
//get specificly just the bio and name
//accept multiple developers
//user Promise.all like I'd like it to
//moving on for now.