const express = require("express")
const morgan = require('morgan')

const credentialsRouter = require('./routes/credRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

// app.use((req, res, next) => {
//     console.log("Hello From The Middleware ✌️")
//     next()
// })


//MOUNTING A ROUTER IN A ROUTE
app.use('/api/v1/credentials', credentialsRouter)


module.exports = app;