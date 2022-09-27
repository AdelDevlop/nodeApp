const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('COMPLETELY NEW VERSION !')
})

app.get('/build/:build_number', (req, res) => {
    console.log('received new build : ', req.params.build_number)
    res.send('new build ? ' + req.params.build_number)
})

app.listen(3002, console.log('server started at port 3000'))