/*const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request,response) => {
    //console.log(request.url)
    //console.log(request.method)
    /*const path = request.url
    const markup = fs.readFileSync('./index.html')
    response.write(markup)
    response.end()*/
    /*const { url } = request
    if(url == '/login'){
        response.write('<h1>LOGIN<h1>')
        response.end()
    }
    if(url == '/signup'){
        response.write('<h1>SIGNUP<h1>')
        response.end()
    }
})


server.listen(3000, ()=> {
    console.log(`Server Listening at PORT: ${3000}`)
})*/


const express = require('express')
const app = express()

const data = [{ name: "Vrishir"}, { name: "Susan"}, { name: "Varun"}]
app.get('/login', (req, res) => {
    //console.log(req.url)
    res.send('LOGIN')
})

app.get('/signup', (req, res) => {
    //console.log(req.url)
    res.send('SIGNUP')
})

app.get('/getNames', (req,res) => {
    res.send(data)
})
app.listen(3000, () => {
    console.log("Server listening at PORT: 3000")
})