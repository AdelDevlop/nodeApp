const express = require('express')
const app = express()
const { exec } = require('child_process')
const { stderr } = require('process')

app.get('/', (req, res) => {
    res.send('Je pense que tout va bien !')
})
app.get('/build', (req, res) => {
    console.log('ok')
})
app.get('/build/:build_number', (req, res) => {
    console.log('received new build : ', req.params.build_number)

    exec('docker ps -a', (err, stdout, stderr) => {
        if ( err ) {
            console.log('exec err ', err)
            return
        }
        if ( stderr ) {
            console.log('stderr err ', stderr)
            return
        }
        console.log('exec stdout : ', stdout)
    })
    res.send('new build ? ' + req.params.build_number)

})

app.listen(3002, console.log('server started at port 3000'))