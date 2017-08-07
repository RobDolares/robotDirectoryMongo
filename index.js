const express = require('express');
const mustacheExpress = require('mustache-express');
const db = require('./db');
const app = express();

const rootRoutes = require('./routes/root');


let url = 'mongodb://localhost:27017/robots';

//tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//static files
app.use(express.static('public'));

app.use('/', rootRoutes);

// start the app
db.connect(url, (err, connection) => {
  if (!err) console.log('connected to mongo');

  app.listen(3000, () => console.log('up and running'));
});
