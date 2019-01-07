const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const markersRoutes = require('./routes/markers')
const citiesRoutes = require('./routes/cities')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())
app.use('/cities', citiesRoutes)
app.use('/markers', markersRoutes)

app.listen(port, () => console.log(`listening on ${port}`))
