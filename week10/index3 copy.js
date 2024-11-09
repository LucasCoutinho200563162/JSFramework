import express from 'express'
import employees from './data/employees.json' with {type: 'json'}

/*
ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)


Fix: add  --experimental-json-modules after nodemon
*/
const app = express() 
const port = 3000

// Read
app.get('/crud', (req, res) => {
    res.send('Practising .get() HTTP method for "Read/Retrieve"')
})

// Create
app.post('/crud', (req, res) => {
    res.send('Practising .post() HTTP method for "Read/Retrieve"')
})

// Update
app.put('/crud', (req, res) => {
    res.send('Practising .put() HTTP method for "Read/Retrieve"')
})

// Delete
app.delete('/crud', (req, res) => {
    res.send('Practising .delete() HTTP method for "Read/Retrieve"')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// npm install nodemon 
//npm start scriptname