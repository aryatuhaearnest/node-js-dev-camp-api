const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'})

const app = express()

app.get('/api/v1/bootcamps',(req,res) =>{
    res.status(200).json({success:true,msq:`show all bootcamps`})
})

app.get('/api/v1/bootcamps/:id',(req,res) =>{
    res.status(200).json({success:true,msq:`show  bootcamp ${req.params.id}`})
})

app.put('/api/v1/bootcamps',(req,res) =>{
    res.status(200).json({success:true,msq:`add  bootcamp`})
})

app.patch('/api/v1/bootcamps/:id',(req,res) =>{
    res.status(200).json({success:true,msq:`update  bootcamp ${req.params.id}`})
})


app.delete('/api/v1/bootcamps/:id',(req,res) =>{
    res.status(200).json({success:true,msq:`delete  bootcamp ${req.params.id}`})
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

