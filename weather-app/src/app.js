const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partilasPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partilasPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
