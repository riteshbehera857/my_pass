const express = require("express")
const { errorHandler } = require("./middleware/errorMiddleware")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//MOUNTING A ROUTER IN A ROUTE
app.use('/api/v1/credentials', require('./routes/credRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))

app.use(errorHandler)

module.exports = app;