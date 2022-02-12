const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./index')

dotenv.config({ path: './.env' })


const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

mongoose
    .connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(con => {
        console.log('Successfully connected to the database')
    }).catch(error => console.log(error)
    )


port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})