const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./bsGen')
const app = express()
const port = 3000

app.engine('handlebars', exhbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.render('home')
})

app.post('/', (req, res) => {
  // console.log('req.body', req.body)
  const options = req.body
  const str = generatePassword(options)
  // console.log(str)
  res.render('home', {string: str})
})

app.listen(port, () => console.log(`listening on ${port}`))
