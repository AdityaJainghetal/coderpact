const mongoose = require('mongoose')

const dbConnect = () => {
    try{
        mongoose.connect("mongodb+srv://adityajainghetal:xc8aluWQhW3vwS43@cluster0.npdfsta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('database connected')
    }catch(err){
        console.log(err)
    }
} 


module.exports = dbConnect
