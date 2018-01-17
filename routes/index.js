const express = require('express');
const router = express.Router(); //middleware function
const tweetBank = require('../tweetBank');


router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  res.render('index', { title : 'Twitter.js', tweets: tweets, showForm : true });
});


// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('/Users/danidewaal/Desktop/1801-gh-ny-library/twitter-js/public/stylesheets/style.css'); //long version of using express.static
//   res.render('index');
// })

// router.use(express.static('public')); ====> have put this in app.js

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render('index', {title : 'Twitter.js', tweets : list, showForm : true, username : req.params.name} );
});

router.get('/tweets/:id', function (req, res, next) {
  var id = Number(req.params.id);
  var tweetsWithId = tweetBank.find( {id : id} );
  res.render('index', {tweets : tweetsWithId});
});


router.post('/tweets', function(req,res,next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect();
});


// router.get('/:name', function (req, res, next) {
//   let foundTweet = tweetBank.find('/:name');
//   res.render('index', {})
// })


module.exports = router;
