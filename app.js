const express = require('express');
const app = express();

app.use((req,res,next) => {
  console.log('Request Type: ', req.method);
  next();
},
  (req,res,next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.get('/', (req,res) => {
  res.write('It\'s just the beginning...')
  res.end();
  });


app.get('/news', (req,res) => {
  res.write('This is not Fox news.');
  res.end();
})



app.listen(3000, () => console.log('server listening'));
