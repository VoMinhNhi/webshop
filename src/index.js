const express = require('express')
const app = express()
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path');

const port = 3000

// HTTP engine
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})