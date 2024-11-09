import express from 'express'
import employees from './data/employees.json' with {type: 'json'}

/*
ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)


Fix: add  --experimental-json-modules after nodemon
*/
const app = express() 
const port = 3000

var cars = {
    "Car": "BMW", 
    "Color": "Black",
    "Year": 2023
}

// Route Root: 
// URL => localhost:3000
app.get('/cars', (req, res) => {
    res.send('<p>'+ JSON.stringify(cars) + '</p>')
})

app.get('/employees', (req, res) => {
    res.send('<p>'+ JSON.stringify(employees) + '</p>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// npm install nodemon 
//npm start scriptname