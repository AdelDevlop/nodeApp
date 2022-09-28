const express = require('express')
const app = express()
const { exec } = require('child_process')
const { stderr } = require('process')
const shell = require('shelljs')

app.get('/', (req, res) => {
    res.send('Je pense que tout va bien !')
})
app.get('/build', (req, res) => {
    console.log('ok')
})
app.get('/build/:build_number', (req, res) => {
    console.log('received new build : ', req.params.build_number)
    console.log( shell.exec('./deploy.sh') )
    
    res.send('new build ? ' + req.params.build_number)

})

app.listen(3002, console.log('server started at port 3000'))