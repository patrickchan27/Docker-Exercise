const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"5",
      "title":"Task 1",
      "completed": true
    },
    {
      "id":"2",
      "title":"Task 2",
      "completed": false
    },
    {
      "id":"3",
      "title":"Task 3",
      "completed": false
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})