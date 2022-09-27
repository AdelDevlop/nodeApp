const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('OK ? 2 CI/CD FULLY ? REALLY ? ? FINAL..')
})

app.listen(3000, console.log('server started at port 3000'))