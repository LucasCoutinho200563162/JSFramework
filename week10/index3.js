import express from 'express'

const app = express() 
const port = 3000


// Post route for Create in CRUD operations
app.post('/crud', (req, res) => {
    res.send('Performing .post() HTTP method.')
})


// Get route for Read in CRUD operations
app.get('/crud', (req, res) => {
    res.send('Performing .get() HTTP method."')
})


// Put route for Update in CRUD operations
app.put('/crud', (req, res) => {
    res.send('Performing .put() HTTP method.')
})

// Delete route for Delete in CRUD operations
app.delete('/crud', (req, res) => {
    res.send('Performing .delete() HTTP method.')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


