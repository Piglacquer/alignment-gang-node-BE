const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const markersRoutes = require('./routes/markers')
const locationsRoutes = require('./routes/locations')
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())
app.use('/locations', locationsRoutes)
app.use('/markers', markersRoutes)

app.get('*', (req, res, next) => {
  next(new Error('Inappropriate request, bruh'))
})

app.use((error, req, res, next) => {
  res.status(404).send({ error })
})

app.listen(port, () => console.log(`listening on ${port}`))
