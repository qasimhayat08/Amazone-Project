const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    console.log("Data Base is connected now")
    } catch(err){
        console.log("Some one error is here", err)
    }
    
}
module.exports = connectDB