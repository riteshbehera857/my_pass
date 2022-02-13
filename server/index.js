const express = require("express")
const { errorHandler } = require("./middleware/errorMiddleware")
const credentialsRouter = require('./routes/credRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//MOUNTING A ROUTER IN A ROUTE
app.use('/api/v1/credentials', credentialsRouter)

app.use(errorHandler)

module.exports = app;