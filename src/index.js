const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const port = 3000

// HTTP engine
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})