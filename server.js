require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const errorHandler = require("./middleware/errorMiddleware")




//import routes
const tempusRoutes = require("./routes/tempusRoutes")
// start express app
const app = express()

// routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

//middleware
app.use((req, res, next) => {
    next()
})
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))


//routes middleware
app.use("/api/tempus", tempusRoutes)


//error middleware
app.use(errorHandler)


//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })