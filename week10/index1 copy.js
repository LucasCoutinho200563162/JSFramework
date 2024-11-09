import express from 'express'
const app = express() 
const port = 3000

// Route Root: 
// URL => localhost:3000
app.get('/', (req, res) => {
    res.send('<p>Group10: Alex, Sam, Kate!</p>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// install nodemon 
//npm start scriptname