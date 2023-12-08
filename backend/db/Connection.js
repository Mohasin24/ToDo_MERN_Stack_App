// old way
// const mongoose = require('mongoose')

import mongoose from "mongoose"

const Connection = async(URI)=>{
    return mongoose.connect(URI);
}

export default Connection;