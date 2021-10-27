/*const express = require('express')
const PORT = 3000
const app = express()

const Logger = (req,res,next) => {
    console.log(req.method)
    next()
}

app.use(express.json)     //automatically add middleware 

app.get('/', (req,res) => {
    res.send('Server Running')
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.send('Server Running')
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})*/




/*const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())     //automatically add middleware 

let products = [{name: 'iPhone 12 Case', price:'999'},{name: 'iPhone 13 Case', price:'1499'},{name: 'iPhone 13 Pro Case', price:'1999'}]

//--------------------PUBLIC ROUTES--------------------
//GET route
//send products
app.get('/products', (req,res) => {
    res.json({products})
})

//--------------------PUBLIC ROUTES--------------------
app.post('/products/add', (req,res) => {
    console.log(req.body.name)
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    }
    products.push(newProduct)
    res.send('Product added')
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})*/



/*const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())     //automatically add middleware 

let products = [{name: 'iPhone 12 Case', price:'999'},{name: 'iPhone 13 Case', price:'1499'},{name: 'iPhone 13 Pro Case', price:'1999'}]

//Middlewares
const validator =(req, res) => {
    const{name,price} = req.body
    if(!name || !price) res.json({error: "Validation Failed"})
    else next()
}

//--------------------PUBLIC ROUTES--------------------
//GET route
//send products
app.get('/products', (req,res) => {
    res.json({products})
})

//--------------------PUBLIC ROUTES--------------------
app.post('/products/add', validator, (req,res) => {
    const{name,price} = req.body
    products.push({
    name,
    price,
    })
    res.send({products})
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})*/



const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())     //automatically add middleware 
const token = "TOP_SECRET"
let products = [{name: 'iPhone 12 Case', price:'999'},{name: 'iPhone 13 Case', price:'1499'},{name: 'iPhone 13 Pro Case', price:'1999'}]

//Middlewares
const validator =(req, res) => {
    const{name,price} = req.body
    if(!name || !price) res.json({error: "Validation Failed"})
    else next()
}

const isAuthorised = (req,res,next) => {
    if(req.headers.authorisation ===  token) next()
    else res.json({ error: "UNAUTHORISED"})
}

//--------------------PUBLIC ROUTES--------------------
//GET route
//send products
app.get('/products', (req,res) => {
    res.json({products})
})

//--------------------PRIVATE ROUTES--------------------
app.post('/products/add', isAuthorised, validator, (req,res) => {
    const{name,price} = req.body
    products.push({
    name,
    price,
    })
    res.send({products})
})

//-----------authentication
app.post('/auth', (req,res) => {
    const{email,password} = req.body
    if(email === 'admin@gmail.com' && password === 'password'){
        res.send({token})
    }
    else{
        res.send({message: "UNAUTHORISED"})
    }
    res.send({products})
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})