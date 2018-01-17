const express = require('express');
const app = express();
const morgan = require('morgan');
const swig = require('swig'); // templating engine
const routes = require('./routes');
const bodyParser = require('body-parser');

// app.use((req,res,next) => {
// //   console.log('Request Type: ', req.method);
// //   next();
// // },
// //   (req,res,next) => {
// //   console.log('Request URL:', req.originalUrl);
// //   next();
// });

app.set('views', __dirname + '/views'); //swig boilerplate
app.set('view engine', 'html'); //what file extension do our templates have
app.engine('html', swig.renderFile); //how to render html files
swig.setDefaults({cache : false});

app.use(morgan('dev'));

app.use(express.static('public')); // can have this here or in routes folder

app.use(bodyParser.urlencoded({extended : true })); //for HTML form submits

app.use('/', routes); // middleware function


app.listen(3000, () => console.log('server listening'));
