const express = require("express")
const morgan = require('morgan')

const credentialsRouter = require('./routes/credRoutes')

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//MOUNTING A ROUTER IN A ROUTE
app.use('/api/v1/credentials', credentialsRouter)


module.exports = app;