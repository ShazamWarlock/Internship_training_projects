const express = require('express')
const database = require('../database/db')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

router.get('/all', (req,res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status:"FAILED"
        })
    }
})

router.post('/add', (req,res)=> {
    try {
        const {name} = req.body
        let newCategory = {
            name,
            id: "RANDOM_ID"
        }
        database.categories.push(newCategory)
        res.status(200).json({
            categories: categories,
            message: error.message,
            staus: "FAILED"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

module.exports