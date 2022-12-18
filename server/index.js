const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./Routers/authRouter')
const PORT = process.env.PORT || 5000
const cors = require('cors')

const app = express()
mongoose.set('strictQuery',false)

app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)

const start = async () => {
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/cocktailDb');
      app.listen(PORT,()=> console.log(`server has been started on port ${PORT}`))
    }
    catch(e){
       console.log(e)
    }
}

start()



