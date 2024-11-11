import express from 'express';
// Import the JSON data
import data from './data/country_info.json' assert {type: 'json'};

const app = express();
const port = 3000;

app.get('/countries', (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
