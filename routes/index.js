const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets } );
});


// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('/Users/danidewaal/Desktop/1801-gh-ny-library/twitter-js/public/stylesheets/style.css');
//   res.render('index');
// })

router.use(express.static('public'));

router.get('/users/:name/', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log('LIST', list);
  res.render('index', {tweets : list});
});

router.get('/users/:id/', function (req, res) {
  var id = (req.params.id) * 1;
  var list = tweetBank.find( {id : id});
  res.render('index', {tweets : id});
});


// router.get('/:name', function (req, res, next) {
//   let foundTweet = tweetBank.find('/:name');
//   res.render('index', {})
// })


module.exports = router;
