// old way
// const express = require('express')
// require('dotenv').config;

//  new way
import express from 'express';
import Connection from './db/Connection.js';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = 5500;
const URI = process.env.MONGO_URI;

const start= async()=>{
    try{
        await Connection(URI);
        app.listen(()=>{console.log(`Listening on port : ${PORT}`)});
    }
    catch(error)
    {
        console.log(error);
    }
}

start();