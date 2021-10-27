/*const express = require('express')
const PORT = 3000

const app = express()

console.log(express)

app.get('/', (req,res) => {
    res.send('GET')
})

app.post('/', (req,res) => {
    res.send('POST')
})

app.put('/', (req,res) => {
    res.send('PUT')
})

app.patch('/', (req,res) => {
    res.send('PATCH')
})

app.delete('/', (req,res) => {
    res.send('DELETE')
})

/*app.get('/login', (req,res) => {
    res.send('login form')
})*/

/*app.listen(PORT, () => {
    console.log(`Server running at port ${3000}`)
})


module.exports = () => {}*/



/*const express = require('express')
const PORT = 3000
const app = express()*/

/*const verify = (req,res,next) => {
    if(req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") next()
    else res.send('BLOCKED')
}*/

/*const isAdmin = (req,res,next) => {
    if(req.headers.admin === 'true') next()
    else res.send("UNAUTHORISED")
}

app.get('/public', (req,res) => {
    console.log(req.headers)
    res.send('This is a public route')
    /*if(req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io") res.send('GET')
    else res.send('BLOCKED')*/
/*})

app.get('/private', isAdmin, (req,res) => {
    res.send('This is Admin route')
})

/*app.listen(PORT, () => {
    console.log(`Server running at port ${3000}`)
})

module.exports = () => {}*/



const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())

app.post('/signup', (req,res) => {
    console.log(req.body)
    res.send('dadada')
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})

module.exports = () => {}