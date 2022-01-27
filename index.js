const express = require('express')
const app = express()
const port = 5050
#
app.get('/', (req, res) => {
  res.send('\'sMuire duit, dude,')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

