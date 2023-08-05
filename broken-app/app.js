const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json())

app.get('/dev', async (request, response) => {
    try {
        // console.log(request.query);
        // const developerUsername = request.query.developer;
        // const apiResponse = await axios.get(`https://api.github.com/users/${developerUsername}`);
        // console.log(apiResponse.data.bio)
        // console.log(apiResponse.data.name)
        // // return (response.status(200).json(apiResponse.data))
        // return response.json({
        //     bio:apiResponse.data.bio,
        //     name:apiResponse.data.name
        // })
        const developerUsernames = request.query.developer;
        const devsArray = developerUsernames.split(",")
        const bioNameArray = []
        console.log(devsArray)
        for(let i = 0; i < devsArray.length; i++){
            let apiResponse = await axios.get(`https://api.github.com/users/${devsArray[i]}`)
            bioNameArray.push({
                bio:apiResponse.data.bio,
                name:apiResponse.data.name
            })
        }
        console.log(bioNameArray)
        return response.json(
            bioNameArray
        )
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